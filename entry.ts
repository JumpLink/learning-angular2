declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};


require("./style.css");
import content = require("./content");
import $ = require('jquery');

$(() => {
	$(document.body).html(content("World"));
});