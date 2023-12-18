class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segment = segments;
    }

    draw(ctx) {
        for (const seg of this.segments) {
            seg.draw(ctx);
        }

        for (const point of this.points) {
            point.draw(ctx);
        }
    }
}