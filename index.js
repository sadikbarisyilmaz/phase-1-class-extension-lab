class Polygon {
    constructor(sidesArr) {
        this.sides = sidesArr
    }


    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b)
    }
}



class Triangle extends Polygon {

    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]

        if (a + b <= c || a + c <= b || b + c <= a) {
            return false;
        } else {
            return true;
        }
    }

}
class Square extends Polygon {

    get area(){
        return this.sides[0] * this.sides[1]
        
    }


    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]

        if (a === b && a === c && a === d) {
            return true;
        } else {
            return false;
        }
    }

}