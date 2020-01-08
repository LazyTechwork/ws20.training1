let rand = (type = 'text', length = 11) => type === 'text' ? Math.random().toString(36).slice(-length) : Math.random().toString().slice(-length);
let base64 = () => 'data:image/png;base64,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0OQu2N8edO2rEKl9e5uHD6a3t9YziKDJ3fjn7Wf3bxuaAk0A0AQATQDQBABNAABNANAEAE0A0AQATQDQBABNANAETQDQBABNANAEAE0A0AQATQDQBADQBABNANAEAE0A0AQATQDQBABNAABNANAEAE0A0AQATQDQBABNANAEANAEAE0A0AQATQDQBABNANAEAE0AAE0A0AQATQDQBABNANAEAE0A0AQA0AQATQDQBABNANAEAE0A0AQATdAEAE0A0AQATQDQBABNANAEAE0AAE0A0AQATQDQBABNANAEAE0A7q7J0APcGDQBQBMANAFAEwA0AUATADQBQBM0AUATADQBQBMANAFAEwA0AUATADRBEwA0AUATADQBQBMANAFAEwA0AUATNAFAEwA0AUATADQBQBMANAFAEwA0QRMANAFAEwA0AUATADQBQBMANEETQBM0AUATADQBQBMANAFAEwA0AUATNAFAEwA0AUATADQBQBMANAFAEwA0QRMANAFAEwA0AUATADQBQBMANAFAEzQBQBMANAFAEwA0AUATADQBQBMANEETADQBQBMANAFAEwA0AUATADShoX4xDJNzi/+B+Zvm/e+tc9Nwu/banu6deUOTW+sxu9avRk7j2+ddWq1z9s+D+ypdQZO97+TkvDWRPKbuBk309+dj9T+GVDS5B+O0eHOUdqy9mZZXj2798hw6NKk62H40Jg1t3SPKvB9+umFEkwpHkTaVIr++qlvFjdUJm8o/nOIIFE0+DyNuNalpKg68lpB2cGhShSOLNWewVttiQ2AAiiY48hpXa6OFNlmLJqrzked5jryHG5U2mwtuiQlN9FZrHuZkpjo/LhH1DDRRWqtx1pzOo8qmi/m6bGii8YPYmiuoMuoabpOm3VyTwZuLqHGOMWoU9miCJC+psAndfcbVG2typSQ1NmEXuVQBTZDkRprEJnVooidxv1iSCptwiG2JDU2UhAutMWhykPVOLXFHTZ7N9ZZUV+maDJrUrMmwZpBE6eRz+vwdTYi3Klwa+4rFoEm9msxNHktMZTuzNoMm1WrSPTJJonPq+Rs8mlSrSbahpLrti7NBk0o1yTeUGDNXlr9bNKlUk8Hms6S2zSbOoEmdmrh8klR3sMpo0KRKTTqfz5KluiX0DzSpUpMtW+5e46GPg0GTGjWZcjlS5xHCFk1q1CTPvLtf5joP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';
let getBase64 = async file => {
    const reader = new FileReader();
    return new Promise(resolve => {
        reader.onload = ev => resolve(ev.target.result);
        reader.readAsDataURL(file);
    })
};

let host = 'http://m2.wsr.ru/api/';
let aspects = [
    {
        name: 'Регистрация',
        tests: {
            reg: {
                name: 'Успешная регистрация: пользователю выдаётся идентификатор, при успешном запросе.',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            regStatus: {
                name: 'Успешная регистрация: верный статус',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.status.code == 201 && data.status.text == 'created',
                loading: false,
                status: null,
                result: {
                    request: {},
                    response: {},
                },
            },
            regUPhone: {
                name: 'Бузуспешная регистрация: уникальный номер телефона.',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: params.reg.request.phone,
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.phone !== undefined,
                loading: false,
                status: null,
            },
            regNotName: {
                name: 'Безуспешная регистрация: не заполнен first_name',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: '',
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.first_name !== undefined,
                loading: false,
                status: null,
                result: {
                    request: {},
                    response: {},
                },
            },
            regNotSurname: {
                name: 'Безуспешная регистрация: не заполнен surname',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: '',
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.surname !== undefined,
                loading: false,
                status: null,
                result: {
                    request: {},
                    response: {},
                },
            },
            regNotPhone: {
                name: 'Безуспешная регистрация: не заполнен phone',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: '',
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.phone !== undefined,
                loading: false,
                status: null,
                result: {
                    request: {},
                    response: {},
                },
            },
            regNotPassword: {
                name: 'Безуспешная регистрация: не заполнен password',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('phone'),
                            password: '',
                        };
                    },
                },
                response: async data => data.json !== null && data.json.password !== undefined,
                loading: false,
                status: null,
                result: {
                    request: {},
                    response: {},
                },
            },
            regNotPhoneValid: {
                name: 'Безуспешная регистрация: неправильный формат phone',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: '023456789111',
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.phone !== undefined,
                loading: false,
                status: null,
                result: {
                    request: {},
                    response: {},
                },
            },
            regNotStatus: {
                name: 'Безуспешная регистрация: верный статус.',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: '',
                            surname: '',
                            phone: '',
                            password: '',
                        };
                    },
                },
                response: async data => data.status.code == 422 && data.status.text == 'unprocessable entity',
                loading: false,
                status: null,
                result: {
                    request: {},
                    response: {},
                },
            },
        },
    },
    {
        name: 'Авторизация',
        tests: {
            reg: {
                name: 'Создание пользователя...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            auth: {
                name: 'Успешная авторизация: получение токена.',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg.request.phone,
                            password: params.reg.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            authStatus: {
                name: 'Успешная авторизация: верный статус.',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg.request.phone,
                            password: params.reg.request.password,
                        };
                    },
                },
                response: async data => data.status.code == 200 && data.status.text == 'ok',
                loading: false,
                status: null,
            },
            authEmptyLogin: {
                name: 'Безуспешная авторизация: пустой номер телефона.',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: '',
                            password: 'asd',
                        };
                    },
                },
                response: async data => data.json !== null && data.json.phone !== undefined,
                loading: false,
                status: null,
            },
            authEmptyPassword: {
                name: 'Безуспешная авторизация: пустой пароль.',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg.request.phone,
                            password: '',
                        };
                    },
                },
                response: async data => data.json !== null && data.json.password !== undefined,
                loading: false,
                status: null,
            },
            authEmptyStatus: {
                name: 'Безуспешная авторизация: верный статус при валидации.',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: '',
                            password: '',
                        };
                    },
                },
                response: async data => data.status.code == 422 && data.status.text == 'unprocessable entity',
                loading: false,
                status: null,
            },
            authNo: {
                name: 'Безуспешная авторизация: неверные данные.',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg.request.phone,
                            password: params.reg.request.password + '...',
                        };
                    },
                },
                response: async data => data.json !== null && data.json.login.toLowerCase() == 'incorrect login or password',
                loading: false,
                status: null,
            },
            authNoStatus: {
                name: 'Безуспешная авторизация: верный статус при неверных данных.',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg.request.phone,
                            password: params.reg.request.password + '...',
                        };
                    },
                },
                response: async data => data.status.code == 404 && data.status.text == 'not found',
                loading: false,
                status: null,
            },
        },
    },
    {
        name: 'Выход',
        tests: {
            reg: {
                name: 'Создание пользователя...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            auth: {
                name: 'Авторизация.',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg.request.phone,
                            password: params.reg.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            logout: {
                name: 'Выход: верный статус.',
                request: {
                    url: params => 'logout',
                    type: 'post',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth.response.json.token ? params.auth.response.json.token : false;
                    },
                },
                response: async data => data.status.code == 200 && data.status.text == 'ok',
                loading: false,
                status: null,
            },
            // logoutNot: { // todo: as
            //     name: 'Выход: токен больше не активный.',
            //     request: {
            //         url: params => 'logout',
            //         type: 'post',
            //         params: params => {
            //             return {};
            //         },
            //         bearer: params => {
            //             return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
            //         },
            //     },
            //     response: async data => false,
            //     loading: false,
            //     status: null,
            // },
        },
    },
    {
        name: 'Загрузка фотографии',
        tests: {
            reg: {
                name: 'Создание пользователя...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            auth: {
                name: 'Авторизация...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg.request.phone,
                            password: params.reg.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            uploadStatus: {
                name: 'Успешная загрузка: верный статус.',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => data.status.code == 201 && data.status.text == 'created',
                loading: false,
                status: null,
            },
            uploadId: {
                name: 'Успешная загрузка: поле id.',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => data.json !== undefined && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            uploadUrl: {
                name: 'Успешная загрузка: поле url - абсолютная ссылка.',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => {
                    if(data.json !== undefined && data.json.url !== undefined) {
                        let file = await f('get', data.json.url);
                        return file.status.code == 200;
                    }

                    return false;
                },
                loading: false,
                status: null,
            },
            uploadName: {
                name: 'Успешная загрузка: поле name присутствует и по умолчанию Untitled.',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => {
                    return data.json !== undefined && data.json.name !== undefined && data.json.name.toLowerCase() == 'untitled';
                },
                loading: false,
                status: null,
            },
            uploadValid: {
                name: 'Безуспешная загрузка: верный статус.',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/false-1.gif',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => {
                    return data.status.code == 422 && data.status.text == 'unprocessable entity';
                },
                loading: false,
                status: null,
            },
            uploadValidField: {
                name: 'Безуспешная загрузка: поле с ошибкой.',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/false-1.gif',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => {
                    return data.json !== undefined && data.json.photo !== undefined;
                },
                loading: false,
                status: null,
            },
        },
    },
    {
        name: 'Изменение фотографии',
        tests: {
            reg1: {
                name: 'Создание пользователя 1...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            reg2: {
                name: 'Создание пользователя 2...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            auth1: {
                name: 'Авторизация пользователя 1...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg1.request.phone,
                            password: params.reg1.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            auth2: {
                name: 'Авторизация пользователя 2...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg2.request.phone,
                            password: params.reg2.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            upload: {
                name: 'Загрузка фотографии.',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async data => data.json !== undefined && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            update: {
                name: 'Изменение фотографии: верный статус.',
                request: {
                    url: params => {
                        return `photo/${(params.upload.response.json.id !== undefined ? params.upload.response.json.id : 0)}`;
                    },
                    type: 'post',
                    params: params => {
                        return {
                            _method: 'patch',
                            name: rand(),
                            photo: base64(),
                        };
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async data => data.status.code == 200 && data.status.text == 'ok',
                loading: false,
                status: null,
            },
            updateName: {
                name: 'Изменение фотографии: возвращается измененное название.',
                request: {
                    url: params => {
                        return `photo/${(params.upload.response.json.id !== undefined ? params.upload.response.json.id : 0)}`;
                    },
                    type: 'post',
                    params: params => {
                        return {
                            _method: 'patch',
                            photo: base64(),
                        };
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async (data, params) => data.json !== undefined && data.json.name == params.update.request.name,
                loading: false,
                status: null,
            },
            updatePhoto: {
                name: 'Изменение фотографии: возвращается измененная фотография.',
                request: {
                    url: params => {
                        return `photo/${(params.upload.response.json.id !== undefined ? params.upload.response.json.id : 0)}`;
                    },
                    type: 'post',
                    params: params => {
                        return {
                            _method: 'patch',
                            name: rand(),
                        };
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async (data, params) => {
                    let image = await f('get', params.updateName.response.json.url, false, false, true);
                    let b64 = await getBase64(image);

                    return b64 == base64();
                },
                loading: false,
                status: null,
            },
            updatePhotoNotMy: {
                name: 'Изменение чужой фотографии.',
                request: {
                    url: params => {
                        return `photo/${(params.upload.response.json.id !== undefined ? params.upload.response.json.id : 0)}`;
                    },
                    type: 'post',
                    params: params => {
                        return {
                            _method: 'patch',
                            name: rand(),
                            photo: base64(),
                        };
                    },
                    bearer: params => {
                        return params.auth2.response.json.token !== undefined ? params.auth2.response.json.token : false;
                    },
                },
                response: async data => data.status.code == 403 && data.status.text == 'forbidden',
                loading: false,
                status: null,
            },
        },
    },
    {
        name: 'Удаление фотографии',
        tests: {
            reg1: {
                name: 'Создание пользователя 1...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            reg2: {
                name: 'Создание пользователя 2...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            auth1: {
                name: 'Авторизация под пользователем 1...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg1.request.phone,
                            password: params.reg1.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            auth2: {
                name: 'Авторизация под пользователем 2...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg2.request.phone,
                            password: params.reg2.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            upload1: {
                name: 'Загрузка фотографии от пользователя 1...',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async data => data.json !== undefined && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            upload2: {
                name: 'Загрузка фотографии от пользователя 2...',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth2.response.json.token !== undefined ? params.auth2.response.json.token : false;
                    },
                },
                response: async data => data.json !== undefined && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            deleteStatus: {
                name: 'Удаление своей фотографии: верный статус.',
                request: {
                    url: params => `photo/${params.upload1.response.json.id}`,
                    type: 'delete',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async data => data.status.code == 204 && data.status.text == 'deleted',
                loading: false,
                status: null,
            },
            deleteNotForMe: {
                name: 'Удаление чужой фотографии: верный статус.',
                request: {
                    url: params => `photo/${params.upload2.response.json.id}`,
                    type: 'delete',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async data => data.status.code == 403 && data.status.text == 'forbidden',
                loading: false,
                status: null,
            },
            // deleteFile: { // TODO: do
            //     name: '<b>Удаление чужой фотографии: фотография удалена с сервера. ????</b>',
            //     request: {
            //         url: params => `photo/${params.upload2.response.json.id}`,
            //         type: 'delete',
            //         params: params => {
            //             return {};
            //         },
            //         bearer: params => {
            //             return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
            //         },
            //     },
            //     response: async data => data.status.code == 403 && data.status.text == 'forbidden',
            //     loading: false,
            //     status: null,
            // },
        },
    },
    {
        name: 'Поиск пользователей',
        tests: {
            reg1: {
                name: 'Создание пользователя 1...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            reg2: {
                name: 'Создание пользователя 2...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            reg3: {
                name: 'Создание пользователя 3...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            auth1: {
                name: 'Авторизация под пользователем 1...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg1.request.phone,
                            password: params.reg1.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            auth2: {
                name: 'Авторизация под пользователем 2...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg2.request.phone,
                            password: params.reg2.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            auth3: {
                name: 'Авторизация под пользователем 2...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg3.request.phone,
                            password: params.reg3.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            search1: {
                name: 'Поиск пользователя: по части имени',
                request: {
                    url: params => {
                        let str = params.reg2.request.first_name;
    
                        return `user?search=${str.substring(1, ~~(str.length / 2))}`;
                    },
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async (data, params) => {
                    if(data.json !== undefined) {
                        if(data.json instanceof Object) {
                            for (let user of data.json) {
                                if(user.id == params.reg2.response.json.id) {
                                    return true;
                                }
                            }
                        }
                    }
    
                    return false;
                },
                loading: false,
                status: null,
            },
            search2: {
                name: 'Поиск пользователя: по части фамилии',
                request: {
                    url: params => {
                        let str = params.reg2.request.surname;
    
                        return `user?search=${str.substring(1, ~~(str.length / 2))}`;
                    },
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async (data, params) => {
                    if(data.json !== undefined) {
                        if(data.json instanceof Object) {
                            for (let user of data.json) {
                                if(user.id == params.reg2.response.json.id) {
                                    return true;
                                }
                            }
                        }
                    }
    
                    return false;
                },
                loading: false,
                status: null,
            },
            search3: {
                name: 'Поиск пользователя: по части номера',
                request: {
                    url: params => {
                        let str = params.reg2.request.phone;
    
                        return `user?search=${str.substring(1, ~~(str.length / 2))}`;
                    },
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async (data, params) => {
                    if(data.json !== undefined) {
                        if(data.json instanceof Object) {
                            for (let user of data.json) {
                                if(user.id == params.reg2.response.json.id) {
                                    return true;
                                }
                            }
                        }
                    }
    
                    return false;
                },
                loading: false,
                status: null,
            },
            search4: {
                name: 'Поиск пользователя: по составному запросу',
                request: {
                    url: params => {
                        let first_name = params.reg2.request.first_name;
                        let surname = params.reg2.request.surname;
                        let phone = params.reg2.request.phone;
    
                        return `user?search=${first_name.substring(1, ~~(first_name.length / 2))} ${surname.substring(1, ~~(surname.length / 2))} ${phone.substring(1, ~~(phone.length / 2))}`;
                    },
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async (data, params) => {
                    if(data.json !== undefined) {
                        if(data.json instanceof Object) {
                            for (let user of data.json) {
                                if(user.id == params.reg2.response.json.id) {
                                    return true;
                                }
                            }
                        }
                    }
    
                    return false;
                },
                loading: false,
                status: null,
            },
            search5: {
                name: 'Поиск пользователя: не видет себя в поиске',
                request: {
                    url: params => {
                        return `user?search=${params.reg1.request.phone}`;
                    },
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async (data, params) => {
                    if(data.json !== undefined) {
                        if(data.json instanceof Object) {
                            for (let user of data.json) {
                                if(user.id == params.reg1.response.json.id) {
                                    return false;
                                }
                            }
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
    
                    return true;
                },
                loading: false,
                status: null,
            },
        },
    },
    {
        name: 'Получение одной фотографии',
        tests: {
            reg: {
                name: 'Создание пользователя...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            auth: {
                name: 'Авторизация...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg.request.phone,
                            password: params.reg.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            upload: {
                name: 'Загрузка фотографии...',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => data.json !== undefined && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            get1: {
                name: 'Получение фотографии: верный статус.',
                request: {
                    url: params => `photo/${params.upload.response.json !== undefined && params.upload.response.json.id !== undefined ? params.upload.response.json.id : 0}`,
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => data.status.code == 200 && data.status.text == 'ok',
                loading: false,
                status: null,
            },
            get2: {
                name: 'Получение фотографии: поля id, name и url присутствуют.',
                request: {
                    url: params => `photo/${params.upload.response.json !== undefined && params.upload.response.json.id !== undefined ? params.upload.response.json.id : 0}`,
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => {
                    if(data.json) {
                        return data.json.id !== undefined && data.json.name !== undefined && data.json.url !== undefined;
                    }
                },
                loading: false,
                status: null,
            },
            get3: {
                name: 'Получение фотографии: поля owner_id и users правильные.',
                request: {
                    url: params => `photo/${params.upload.response.json !== undefined && params.upload.response.json.id !== undefined ? params.upload.response.json.id : 0}`,
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async (data, params) => {
                    if(data.json) {
                        return data.json.owner_id !== undefined && params.reg.response.json.id == data.json.owner_id && data.json.users instanceof Array;
                    }
                },
                loading: false,
                status: null,
            },
        },
    },
    {
        name: 'Получение всех фотографий',
        tests: {
            reg: {
                name: 'Создание пользователя...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            auth: {
                name: 'Авторизация...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg.request.phone,
                            password: params.reg.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            upload1: {
                name: 'Загрузка фотографии 1...',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => data.json !== undefined && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            upload2: {
                name: 'Загрузка фотографии 2...',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => data.json !== undefined && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            getStatus: {
                name: 'Получение фотографий: верный статус.',
                request: {
                    url: params => `photo`,
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => data.status.code == 200 && data.status.text == 'ok',
                loading: false,
                status: null,
            },
            get: {
                name: 'Получение фотографий: загруженные фотографии присутствуют, запрос содержит массив с объектами, где в объекте присутствует как минимум идентификатор фотографии.',
                request: {
                    url: params => `photo`,
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async (data, params) => {
                    if(data.json && data.json instanceof Array) {
                        if(
                            data.json.find(a => a.id == params.upload1.response.json.id) &&
                            data.json.find(a => a.id == params.upload2.response.json.id)
                        ) {
                            return true;
                        }
                    }
    
                    return false;
                },
                loading: false,
                status: null,
            },
            getAllFields: {
                name: 'Получение фотографий: содержаться все поля.',
                request: {
                    url: params => `photo`,
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async (data, params) => {
                    if(data.json && data.json instanceof Array) {
                        let photo = data.json[0];
                        if(
                            photo.id !== undefined &&
                            photo.name !== undefined &&
                            photo.url !== undefined &&
                            photo.owner_id !== undefined &&
                            photo.users !== undefined
                        ) {
                            return true
                        }
                    }
    
                    return false;
                },
                loading: false,
                status: null,
            },
        },
    },
    {
        name: 'Шаринг фотографий',
        tests: {
            reg1: {
                name: 'Создание пользователя 1...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            auth1: {
                name: 'Авторизация пользователя 1...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg1.request.phone,
                            password: params.reg1.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            reg2: {
                name: 'Создание пользователя 2...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            auth2: {
                name: 'Авторизация пользователя 2...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg2.request.phone,
                            password: params.reg2.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            upload1: {
                name: 'Загрузка фотографии 1...',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async data => data.json !== undefined && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            share: {
                name: 'Шаринг: верный статус.',
                request: {
                    url: params => `user/${params.reg2.response.json.id !== undefined ? params.reg2.response.json.id : 0}/share`,
                    type: 'post',
                    params: params => {
                        let photos = [];
                        if(params.upload1.response.json && params.upload1.response.json.id !== undefined) {
                            photos.push(params.upload1.response.json.id);
                        }
                        return {
                            photos,
                        };
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async data => data.status.code == 201 && data.status.text == 'created',
                loading: false,
                status: null,
            },
            shareExist: {
                name: 'Шаринг: В случае, если в массиве будет id фотографии которая уже была расшарена, то повторно она расшарена не будет.',
                request: {
                    url: params => `user/${params.reg2.response.json.id !== undefined ? params.reg2.response.json.id : 0}/share`,
                    type: 'post',
                    params: params => {
                        let photos = [];
                        if(params.upload1.response.json && params.upload1.response.json.id !== undefined) {
                            photos.push(params.upload1.response.json.id);
                        }
                        return {
                            photos,
                        };
                    },
                    bearer: params => {
                        return params.auth1.response.json.token !== undefined ? params.auth1.response.json.token : false;
                    },
                },
                response: async (data, params) => {
                    if(data.json && data.json.existing_photos && data.json.existing_photos instanceof Array) {
                        if(params.upload1.response.json && params.upload1.response.json.id !== undefined) {
                            return data.json.existing_photos.indexOf(params.upload1.response.json.id) !== -1;
                        }
                    }

                    return false;
                },
                loading: false,
                status: null,
            },
            shareAccess: {
                name: 'Шаринг: пользователю, которому расшарили фото, доступно фото.',
                request: {
                    url: params => `photo`,
                    type: 'get',
                    params: params => {
                        return {};
                    },
                    bearer: params => {
                        return params.auth2.response.json.token !== undefined ? params.auth2.response.json.token : false;
                    },
                },
                response: async (data, params) => {
                    if(data.json && data.json instanceof Array) {
                        if(params.upload1.response.json && params.upload1.response.json.id !== undefined) {
                            return data.json.find(e => e.id == params.upload1.response.json.id) !== undefined;
                        }
                    }

                    return false;
                },
                loading: false,
                status: null,
            },
        },
    },
    {
        name: 'Не авторизованному пользователю недоступен функционал',
        tests: {
            upload: {
                name: 'Верный ответ на запрет доступа: Загрузка фотографии.',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                },
                response: async data => data.json !== undefined && data.json.message.toLowerCase() == 'you need authorization' && data.status.code == 403 && data.status.text == 'forbidden',
                loading: false,
                status: null,
            },
            reg: {
                name: 'Создание пользователя...',
                request: {
                    url: params => 'signup',
                    type: 'post',
                    params: params => {
                        return {
                            first_name: rand(),
                            surname: rand(),
                            phone: rand('number'),
                            password: rand(),
                        };
                    },
                },
                response: async data => data.json !== null && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            auth: {
                name: 'Авторизация пользователя...',
                request: {
                    url: params => 'login',
                    type: 'post',
                    params: params => {
                        return {
                            phone: params.reg.request.phone,
                            password: params.reg.request.password,
                        };
                    },
                },
                response: async data => data.json !== null && data.json.token !== undefined,
                loading: false,
                status: null,
            },
            uploadUser: {
                name: 'Загрузка фотографии...',
                request: {
                    url: params => 'photo',
                    type: 'post',
                    formData: true,
                    params: params => {
                        return {
                            photo: {
                                type: 'image',
                                url: 'tests/images/true-1.jpg',
                            },
                        };
                    },
                    bearer: params => {
                        return params.auth.response.json.token !== undefined ? params.auth.response.json.token : false;
                    },
                },
                response: async data => data.json !== undefined && data.json.id !== undefined,
                loading: false,
                status: null,
            },
            update: {
                name: 'Верный ответ на запрет доступа: Изменение фотографии.',
                request: {
                    url: params => {
                        return `photo/${(params.uploadUser.response.json.id !== undefined ? params.uploadUser.response.json.id : 0)}`;
                    },
                    type: 'post',
                    params: params => {
                        return {
                            _method: 'patch',
                            name: rand(),
                            photo: base64(),
                        };
                    },
                },
                response: async data => data.json !== undefined && data.json.message.toLowerCase() == 'you need authorization' && data.status.code == 403 && data.status.text == 'forbidden',
                loading: false,
                status: null,
            },
            delete: {
                name: 'Верный ответ на запрет доступа: Удаление фотографии.',
                request: {
                    url: params => `photo/${params.uploadUser.response.json.id !== undefined ? params.uploadUser.response.json.id : 0}`,
                    type: 'delete',
                    params: params => {
                        return {};
                    },
                },
                response: async data => data.json !== undefined && data.json.message.toLowerCase() == 'you need authorization' && data.status.code == 403 && data.status.text == 'forbidden',
                loading: false,
                status: null,
            },
            search: {
                name: 'Верный ответ на запрет доступа: Поиск фотографии.',
                request: {
                    url: params => `user?search=1`,
                    type: 'get',
                    params: params => {
                        return {};
                    },
                },
                response: async data => data.json !== undefined && data.json.message.toLowerCase() == 'you need authorization' && data.status.code == 403 && data.status.text == 'forbidden',
                loading: false,
                status: null,
            },
            get: {
                name: 'Верный ответ на запрет доступа: Получение фотографии.',
                request: {
                    url: params => `photo/${params.uploadUser.response.json !== undefined && params.uploadUser.response.json.id !== undefined ? params.uploadUser.response.json.id : 0}`,
                    type: 'get',
                    params: params => {
                        return {};
                    },
                },
                response: async data => data.json !== undefined && data.json.message.toLowerCase() == 'you need authorization' && data.status.code == 403 && data.status.text == 'forbidden',
                loading: false,
                status: null,
            },
            getAll: {
                name: 'Верный ответ на запрет доступа: Получение фотографий.',
                request: {
                    url: params => `photo`,
                    type: 'get',
                    params: params => {
                        return {};
                    },
                },
                response: async data => data.json !== undefined && data.json.message.toLowerCase() == 'you need authorization' && data.status.code == 403 && data.status.text == 'forbidden',
                loading: false,
                status: null,
            },
            share: {
                name: 'Верный ответ на запрет доступа: Шаринг.',
                request: {
                    url: params => `user/${params.reg.response.json.id !== undefined ? params.reg.response.json.id : 0}/share`,
                    type: 'post',
                    params: params => {
                        return {};
                    },
                },
                response: async data => data.json !== undefined && data.json.message.toLowerCase() == 'you need authorization' && data.status.code == 403 && data.status.text == 'forbidden',
                loading: false,
                status: null,
            },
        },
    },
];