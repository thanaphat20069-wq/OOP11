export{};
abstract class Notification{
    send(message: string) : void{
        console.log(message);
    }
}
class EmailNotification extends Notification{
    send(message: string) : void{
    console.log(`[Email Notification] : ${message}`); 
    }
}
class SMSNotification extends Notification{
    send(message: string) : void{
    console.log(`[SMS Notification] : ${message}`);
    }
}
const notis: Notification[]=[new EmailNotification(),new SMSNotification()];
notis.forEach((noti)=> noti.send("สวัสดีตอนเช้า สมาชิกทุกท่าน"));
notis.forEach((noti)=> noti.send("แจ้งข่าวโปรโมชั่น"));