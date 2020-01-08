let f = async (method, url, body = {}, bearer = false, blob = false) => {
    let options = {
        method: method.toUpperCase(),
        headers: new Headers(),
    };

    !(body instanceof FormData) ? options.headers.append('Content-Type', 'application/json') : '';
    bearer ? options.headers.append('Authorization', 'Bearer ' + bearer) : '';
    if(['POST', 'PATCH', 'PUT'].includes(options.method)) {
        options.body = body instanceof FormData ? body : JSON.stringify(body);
    }

    const result = await fetch(url, options);

    const status = {
        code: result.status,
        text: result.statusText.toLowerCase(),
    };

    let response = null;
    try {
        if(blob) {
            response = await result.blob();
        } else {
            response = await result.json();
        }
    } catch (e) {

    }

    if(blob) return response;

    return {
        status,
        json: response,
    };
};

let app = new Vue({
    el: '#app',

    data: {
        aspects,
        host,
    },

    methods: {
        async test() {
			for (let aspect of this.aspects) {
				for (let id in aspect.tests) {
                    let test = aspect.tests[id];
					test.status = null;
					test.loading = false;
				}
			}
            for (let aspect of this.aspects) {
                let params = {};

                for (let id in aspect.tests) {
                    let test = aspect.tests[id];
                    test.loading = true;

                    let request = test.request;
                    let requestParams = request.params(params);

                    if(request.formData) {
                        let formData = new FormData();

                        for(let key in requestParams) {
                            let field = requestParams[key];

                            if(field.type === 'image') {
                                let blob = await f('get', field.url, false, false, true);

                                let fileHelper = new FormData();
                                fileHelper.append('helper', blob, 'image.' + field.url.split('.')[1]);

                                formData.append(key, fileHelper.get('helper'));
                            } else {
                                formData.append(key, field.text);
                            }
                    
                            await new Promise(res => setTimeout(() => res(), 100));
                        }

                        requestParams = formData;
                    }

                    let responseData = await f(request.type, this.host + request.url(params), requestParams, request.bearer ? request.bearer(params) : false);
                    let status = await test.response(responseData, params);

                    params[id] = {
                        request: requestParams,
                        response: responseData,
                    };

                    test.loading = false;
                    test.status = status;

                    test.result = params[id];

                    await new Promise(res => setTimeout(() => res(), 100));
                }

                console.log(params);

                await new Promise(res => setTimeout(() => res(), 1000));
            }
        },

        getClass(test) {
            return {
                'badge-secondary': test.status === null,
                'badge-danger': test.status === false,
                'badge-success': test.status === true,
                'badge-loading': test.loading === true,
            };
        }
    },
});