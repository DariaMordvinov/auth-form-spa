import { http, HttpResponse } from 'msw';

export const handlers = [
    http.post('/auth', () => {
        return HttpResponse.json({ logged: true });
    }),
    http.post('/register', () => {
        return HttpResponse.json({ logged: true });
    }),
    http.post('/reset', () => {
        return HttpResponse.json({ reset: true });
    })
]