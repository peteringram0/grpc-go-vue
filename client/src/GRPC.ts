import {Empty} from '../proto/echo_pb';
import {EchoServiceClient} from '../proto/echo_pb_service';

class GRPC {

    private readonly client = new EchoServiceClient('http://localhost:8080');

    /**
     * Test both standard and stream GRPC
     */
    public init() {

        this.test();
        this.testStream();

    }

    /**
     * Test streaming data via GRPC
     */
    private testStream() {

        const payload = new Empty();
        const stream = this.client.echoStream(payload);

        stream.on('data', (msg) => {
            console.log(msg.toObject().value); // pong
        });

    }

    /**
     * Test a standard GRPC call
     */
    private test() {

        const payload = new Empty();
        this.client.echo(payload, (err, res) => {
            if (err) {
                return console.error(err); // standard error object
            }

            if (res) {
                console.log(res.toObject().value); // pong
            }
        });

    }

}

export default new GRPC();
