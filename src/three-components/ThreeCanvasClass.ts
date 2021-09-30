import type { WebGLRenderer } from "three";

type SizeType = {
    width: number;
    height: number;
};

export default class ThreeCanvas {
    private sizes: SizeType = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    constructor(parameters) {
        this.resize();
    }
    private resize() {
        console.log("resizing");
        this.sizes.width = window.innerWidth;
        this.sizes.height = window.innerHeight;
    }
}
