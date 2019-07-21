import '../css/index.css';
import text from './text';
//lets add elements dinamically

text();


if (module.hot) {
    module.hot.accept('./text.js', function() {
        console.log('reload in runtime');
        text();
    });

}