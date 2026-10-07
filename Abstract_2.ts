class Product{
    constructor(public name:string,public price:number,public quantity:number){}
    getSubtotal():number{
        return this.price*this.quantity;
    }
}
class FixedDiscount{
    private products:Product[]=[];
    addProduct(product:Product):void{
        this.products.push(product);
        console.log(`${product.name}: ${product.price} บาท x ${product.quantity} ชิ้น = ${product.getSubtotal()}`);
    }
    calculateDiscount(percent:number):number{
        return this.calculateDiscount(percent)*percent/100;
    }
    calculateNetTotal(percent:number):number{
        return this.calculateNetTotal(percent)-this.calculateDiscount(percent);
    }
}
class PercentageDiscount{
    constructor(public name:string,public price:number,public quantity:number){
    }
    calculateDiscount(percent:number):number{
        return this.calculateDiscount(percent)*percent/100;
    }
}
const fixeddiscount = new FixedDiscount();
const prod1 = new Product("laptop",25000,2);
const prod2 = new Product("Mouse",500,5);
const prod3 = new Product("Scanner",13000,1);
fixeddiscount.addProduct(prod1);
fixeddiscount.addProduct(prod2);
fixeddiscount.addProduct(prod3);
const dise = 20;
console.log(`รวมเงินทั้งหมด ${fixeddiscount.calculateDiscount} บาท`);
console.log(`ส่วนลด ${dise}% เป็นเงิน ${fixeddiscount.calculateNetTotal} บาท`);
console.log(`ชำระเงินสุทธิ ${fixeddiscount.calculateNetTotal(dise)} บาท`);
