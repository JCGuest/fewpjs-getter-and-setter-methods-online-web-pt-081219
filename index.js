class Circle {
    constructor(radi){
        this.radius = radi
    }

    get diameter(){
        return this.radius *2
    }

    get circumference(){
        return 2 * Math.PI * this.radius
    }

    get area(){
        return Math.PI *(this.radius**2)
    }

    set diameter(diameter){
        this.radius = diameter/2
    }

    set circumference(cir){
        this.radius = (cir/Math.PI)/2
    }

}