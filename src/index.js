import './styles.css';
import webpackLogo from "./images/webpack-logo.jpg";

const app = document.getElementById("app");
app.innerHTML = `
    <div class="container">
        <h1>Webpack Example.</h1>
        <image src="${webpackLogo}" />
    </container>
`;