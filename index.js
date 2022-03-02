import fetch from 'node-fetch';
import throttledQueue from 'throttled-queue';

const start = () => {
    const throttle = throttledQueue(1, 4000);
    for (let index = 1; index <= 5; index++) {
        throttle(async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`);
            const body = await response.json();
            console.log(body);
        });
    }
}

start();