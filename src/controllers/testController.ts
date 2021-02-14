interface TestResponse {
    message: string;
}


import { Get, Route } from 'tsoa';

@Route('test')
export default class TestController {

    @Get("/")
    public async getMessage(): Promise<TestResponse> {
        return {
            message: "Base test"
        }
    }

    @Get("/search")
    public async search(): Promise<TestResponse> {
        // console.log(payload)
        return {
            message: "search test"
        }
    }
}