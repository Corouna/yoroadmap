export class Roadmap {
    constructor(d, c){
        /**
         * D - Data object, which may contain the array of mappers inside
         * C - Chart object
         */

        this.xmlns = "http://www.w3.org/2000/svg";
        this.data = d || null;
        this.width = c.width || '100%';
        this.height = c.height;
        this.padding = c.padding || 15; // set default padding to 15
        this.display = "block";
        this.backgroundColor = "#FAFAFA";
        this.fontFamily = "Roboto";
        this.periodType = c.periodType || "weekly";

        // for single rectangle
        this.singleRect.fill = "rgb(201, 224, 201)";
        this.singleRect.progressFill = "rgb(128, 211, 128)";
        this.singleRect.stroke = "#1c9c1c";
        this.singleRect.height = "30";
        this.singleRect.fontSize = "11px";
        this.singleRect.fontColor = "#000000";
        this.singleRect.rx = "15";

        // for group rectangle

        // for grids
        this.axis.stroke = '#CCCCCC';
        this.axis.strokeWidth = '.5';

        // for labelling
        this.xlabel.fill = 'rgb(0, 0, 0, 0.5)';
        this.xlabel.fontSize = "12px";
        this.ylabel.fontSize = "12px";
        this.grid.boxGap = c.boxGap;
        this.grid.boxHeight = c.boxHeight;
        
    }

    /**
     * 
     * This will create the base svg for the roadmap
     * 
     * @returns svg element
     */
    generateBaseSvg(){
        const svg = document.createElementNS(this.xmlns, "svg");
        svg.setAttributeNS(null, "viewBox", "0 0 " + this.width + " " + this.height);
        svg.setAttributeNS(null, "width", this.width);
        svg.setAttributeNS(null, "height", this.height);
        svg.style.display = this.display;
        svg.style.padding = this.padding;
        svg.style.backgroundColor = this.backgroundColor;

        return svg;
    }

    generateSingleRectangle(data){
        const group = document.createElementNS(this.xmlns, "g");
        group.style.fill = this.singleRect.fill;

        const rect = document.createElementNS(this.xmlns, "rect");
        rect.setAttributeNS(null, 'width', data.width);
        rect.setAttributeNS(null, 'height', this.singleRect.height);
        rect.setAttributeNS(null, 'x', data.coord.x);
        rect.setAttributeNS(null, 'y', data.coord.y);
        rect.setAttributeNS(null, 'rx', this.singleRect.rx);
        rect.setAttributeNS(null, 'stroke', this.singleRect.stroke);
        group.appendChild(rect);
        
        if (data.progress){
            const progressWidth = data.width * (data.progress / 100);

            const progressRect = document.createElementNS(this.xmlns, "rect");
            progressRect.setAttributeNS(null, 'width', progressWidth);
            progressRect.setAttributeNS(null, 'height', this.singleRect.rectHeight);
            progressRect.setAttributeNS(null, 'x', data.coord.x + 1);
            progressRect.setAttributeNS(null, 'y', data.coord.y + 1);
            progressRect.setAttributeNS(null, 'rx', this.singleRect.rx);
            group.appendChild(progressRect);
        }

        const text = document.createElementNS(this.xmlns, "text");
        text.setAttributeNS(null, 'x', data.textcoord.x);
        text.setAttributeNS(null, 'y', data.textcoord.y);
        text.style.fontSize = this.singleRect.fontSize;
        text.style.fill = this.singleRect.fontColor;
        text.textContent = data.label;
        group.appendChild(text);
    
        return group;
    }

    generateGroupRectangle(){
        const rect = document.createElementNS(this.xmlns, "g");
        rect.setAttributeNS(null, 'transform', 'matrix(1,0,0,-1,0,300)');
    
        return rect;
    }

    /**
     * This will create a horizontal polyline
     * 
     * @returns polyline element
     */
    generateXAxis(){
        const points = `${this.padding},${this.height - this.padding} ${this.width - this.padding},${this.height - this.padding}`;

        const xline = document.createElementNS(this.xmlns, "polyline");
        xline.setAttributeNS(null, 'fill', 'none');
        xline.setAttributeNS(null, 'stroke', this.axis.stroke);
        xline.setAttributeNS(null, 'strokeWidth', this.axis.strokeWidth);
        xline.setAttributeNS(null, 'points', points);

        return xline;
    }

    /**
     * This will create a vertical polyline
     * 
     * @returns polyline element
     */
    generateYAxis(){
        const points = `${this.padding}, ${this.padding} ${this.padding}, ${this.height - this.padding}`;

        const yline = document.createElementNS(this.xmlns, "polyline");
        yline.setAttributeNS(null, 'fill', 'none');
        yline.setAttributeNS(null, 'stroke', this.axis.stroke);
        yline.setAttributeNS(null, 'strokeWidth', this.axis.strokeWidth);
        yline.setAttributeNS(null, 'points', points);

        return yline;
    }

    /**
     *  This will generate the horizontal grids / divider on the chart
     * 
     * @returns polyline element
     */
     generateXGrid(idx){
        const startX = this.padding;
        const endX = this.width - this.padding;
        const ratio = (idx + 1) / this.data.length;
        const yCoordinate = this.padding + 5 + (ratio * this.grid.boxHeight) * (this.grid.boxGap * 2);
        const points = `${startX}, ${yCoordinate} ${endX}, ${yCoordinate}`;
    
        const xgrid = document.createElementNS(this.xmlns, "polyline");
        xgrid.setAttributeNS(null, 'fill', 'none');
        xgrid.setAttributeNS(null, 'stroke', this.axis.stroke);
        xgrid.setAttributeNS(null, 'strokeWidth', this.axis.strokeWidth);
        xgrid.setAttributeNS(null, 'points', points);

        return xgrid;
    }

    /**
     *  This will generate the vertical grids / divider on the chart
     * 
     * @returns polyline element
     */
    generateYGrid(idx){
        const startY = this.padding;
        const endY = this.height - this.padding;
        const ratio = (idx + 1) / this.data.length;
        const xCoordinate = this.padding + ratio * (this.width - this.padding * 2);
        const points = `${xCoordinate},${startY} ${xCoordinate}, ${endY}`;
    
        const ygrid = document.createElementNS(this.xmlns, "polyline");
        ygrid.setAttributeNS(null, 'fill', 'none');
        ygrid.setAttributeNS(null, 'stroke', this.axis.stroke);
        ygrid.setAttributeNS(null, 'strokeWidth', this.axis.strokeWidth);
        ygrid.setAttributeNS(null, 'points', points);

        return ygrid;
    }

    /**
     * 
     * This method will generate a single <text> label. For multiple
     * labels, call this method inside a looper. 
     * 
     * @param {*} label - label to be shown
     * @param {*} idx - index of the iteration.
     * @returns text element
     */
    generateXLabel(label, idx){
        const ratio = idx / this.data.length;
        const y = this.padding - 10;
        const x = this.padding + ratio * ( this.width - this.padding * 2 ) + (this.padding * 4);

        const text = document.createElementNS(this.xmlns, "text");
        text.setAttributeNS(null, 'x', x);
        text.setAttributeNS(null, 'x', y);
        text.textContent = label;
        text.style.fill = this.xlabel.fill;
        text.style.fontSize = this.xlabel.fontSize;
        text.style.fontFamily = this.fontFamily;
    
        return text;
    }
    
    /**
     * TODO!
     * This method will generate a single <text> label. For multiple
     * labels, call this method inside a looper. 
     * 
     * @returns text element
     */
    generateYLabel(){}

    generateRoadmap(){
        const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        const svg = this.generateBaseSvg();
        
        // Append the xlabel
        week.forEach((t, idx) => {
            const text = this.generateXLabel(t, idx);
            svg.appendChild(text);
        });

        // Append the y axis
        const yAxis = this.generateYAxis();
        svg.appendChild(yAxis);

        // Append the y grid
        // new Array(this.data.length).fill(0).map((_, index) => {
        //     const grid = this.generateYGrid(index);
        //     svg.appendChild(grid);
        // });

        // // Append the x grid
        // new Array(this.data.length).fill(0).map((_, index) => {
        //     const grid = this.generateXGrid(index);
        //     svg.appendChild(grid);
        // });

        // // Finally the rectangle
        // this.data.forEach((d, idx) => {
        //     const rect = this.generateSingleRectangle(d);
        //     svg.appendChild(rect);
        // });

        // Append to the main div
        const parent = document.getElementById('yo-roadmap');
        parent.appendChild(svg);
    }
}