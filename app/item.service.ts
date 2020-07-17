import { Slot } from './slot.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';
import { News } from './newsdata.model';
import { Users } from './users.model';

@Injectable({providedIn: 'root'})
export class ItemService {
  private posts: Item[] = [];
  private postUpdated = new Subject<Item[]>();
  private check: Slot;
  private checkUpdated = new Subject<Slot>();
  private slots: Slot[] = [];
  private slotsUpdated = new Subject<Slot[]>();
  private food: Item[] = [];
  private foodUpdated = new Subject<Item[]>();
  private drinks: Item[] = [];
  private drinksUpdated = new Subject<Item[]>();
  private sweets: Item[] = [];
  private sweetsUpdated = new Subject<Item[]>();
  private latte: Item[] = [];
  private latteUpdated = new Subject<Item[]>();
  private news: News[] = [];
  private newsUpdated = new Subject<News[]>();
  private faq: News[] = [];
  private faqUpdated = new Subject<News[]>();
  private goods: Item[] = [];
  private goodsUpdated = new Subject<Item[]>();
  private spgoods: Item[] = [];
  private spgoodsUpdated = new Subject<Item[]>();
  private user: Users[] = [];
  private userUpdated = new Subject<Users[]>();
  public LoggedIn;
  public status;


  constructor(private http: HttpClient) {}

  public static UserLog(log): string {
    const LoggedIn = log;
    return LoggedIn;
  }

    addPost(imageUrl: string, name: string, price: number, content: string) {
    const post: Item = { imageUrl , name, price, content };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/posts', post)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
      });
    }

    getPosts() {
    this.http
      .get<{ posts: Item[] }>(
        'http://localhost:3000/api/posts'
      )
      .subscribe(postData => {
        this.posts = postData.posts;
        this.postUpdated.next([...this.posts]);
      });
  }

    getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

    getSlotsUpdateListener() {
    return this.slotsUpdated.asObservable();
  }
    reserveSlot( name: string, email: string, contact: number, date: string, time: string, people: number) {
    const slot: Slot = { name, email, contact, date, time, people};
    this.http
      .post<{ message: string }>('http://localhost:3000/api/slots', slot)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.slots.push(slot);
        this.slotsUpdated.next([...this.slots]);
        alert('Reservation Done');
      });
  }

     getSlots( email: string) {
     this.http
     .post<{ check: Slot }>(
       'http://localhost:3000/api/getslots', email
      )
     .subscribe(slotData => {
       this.check = slotData.check;
       this.checkUpdated.next(this.check);
      });
  }

  addDrinks(imageUrl: string, name: string, price: number, content: string) {
    const drinks: Item = { imageUrl , name, price, content };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/drinks', drinks)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.drinks.push(drinks);
        this.drinksUpdated.next([...this.drinks]);
      });
    }

  getDrinks() {
    this.http
    .get<{ drinks: Item[] }>(
      'http://localhost:3000/api/drinks'
    )
    .subscribe(postData => {
      this.drinks = postData.drinks;
      this.drinksUpdated.next([...this.drinks]);
    });
  }

  getDrinksUpdateListener() {
    return this.drinksUpdated.asObservable();
  }

  addFood(imageUrl: string, name: string, price: number, content: string) {
    const food: Item = { imageUrl , name, price, content };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/food', food)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.food.push(food);
        this.foodUpdated.next([...this.food]);
      });
    }

  getFood() {
    this.http
    .get<{ food: Item[] }>(
      'http://localhost:3000/api/food'
    )
    .subscribe(postData => {
      this.food = postData.food;
      this.foodUpdated.next([...this.food]);
    });
  }

  getFoodUpdateListener() {
    return this.foodUpdated.asObservable();
  }

  addSweets(imageUrl: string, name: string, price: number, content: string) {
    const sweets: Item = { imageUrl , name, price, content };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/sweets', sweets)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.sweets.push(sweets);
        this.sweetsUpdated.next([...this.sweets]);
      });
    }

  getSweets() {
    this.http
    .get<{ sweets: Item[] }>(
      'http://localhost:3000/api/sweets'
    )
    .subscribe(postData => {
      this.sweets = postData.sweets;
      this.sweetsUpdated.next([...this.sweets]);
    });
  }

  getSweetsUpdateListener() {
    return this.sweetsUpdated.asObservable();
  }

  addLatte(imageUrl: string, name: string, price: number, content: string) {
    const latte: Item = { imageUrl , name, price, content };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/latte', latte)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.latte.push(latte);
        this.latteUpdated.next([...this.latte]);
      });
    }

  getLatte() {
    this.http
    .get<{ latte: Item[] }>(
      'http://localhost:3000/api/latte'
    )
    .subscribe(postData => {
      this.latte = postData.latte;
      this.latteUpdated.next([...this.latte]);
    });
  }

  getLatteUpdateListener() {
    return this.latteUpdated.asObservable();
  }

  addFaq(newz: string, newsdata: string) {
    const faq: News = {news: newz, newsdata};
    this.http
       .post<{ message: string }>('http://localhost:3000/api/faq', faq)
       .subscribe(responseData => {
         console.log(responseData.message);
         this.faq.push(faq);
         this.faqUpdated.next([...this.faq]);
       });
   }

   getFaq() {
    this.http
    .get<{ faq: News[] }>(
      'http://localhost:3000/api/faq'
    )
    .subscribe(postData => {
      this.faq = postData.faq;
      this.faqUpdated.next([...this.faq]);
    });
  }

  getFaqUpdateListener() {
    return this.faqUpdated.asObservable();
  }
  addNews(newz: string, newsdata: string) {
   const news: News = {news: newz, newsdata};
   this.http
      .post<{ message: string }>('http://localhost:3000/api/news', news)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.news.push(news);
        this.newsUpdated.next([...this.news]);
      });
  }

  getNews() {
    this.http
    .get<{ news: News[] }>(
      'http://localhost:3000/api/news'
    )
    .subscribe(postData => {
      this.news = postData.news;
      this.newsUpdated.next([...this.news]);
    });
  }
  getNewsUpdateListener() {
    return this.newsUpdated.asObservable();
  }

  addGoods(imageUrl: string, name: string, price: number, content: string) {
    const goods: Item = {imageUrl, name, price, content};
    this.http
       .post<{ message: string }>('http://localhost:3000/api/goods', goods)
       .subscribe(responseData => {
         console.log(responseData.message);
         this.goods.push(goods);
         this.goodsUpdated.next([...this.goods]);
       });
   }

  getGoods() {
    this.http
    .get<{ goods: Item[] }>(
      'http://localhost:3000/api/goods'
    )
    .subscribe(postData => {
      this.goods = postData.goods;
      this.goodsUpdated.next([...this.goods]);
    });
  }

   getGoodsUpdateListener() {
    return this.goodsUpdated.asObservable();
  }

  addSpGoods(imageUrl: string, name: string, price: number, content: string) {
    const spgoods: Item = {imageUrl, name, price, content};
    this.http
       .post<{ message: string }>('http://localhost:3000/api/spgoods', spgoods)
       .subscribe(responseData => {
         console.log(responseData.message);
         this.spgoods.push(spgoods);
         this.spgoodsUpdated.next([...this.spgoods]);
       });
   }

  getSpGoods() {
    this.http
    .get<{ spgoods: Item[] }>(
      'http://localhost:3000/api/spgoods'
    )
    .subscribe(postData => {
      this.spgoods = postData.spgoods;
      this.spgoodsUpdated.next([...this.spgoods]);
    });
  }
  getSpGoodsUpdateListener() {
    return this.spgoodsUpdated.asObservable();
  }

  addUser(username: string, password: string) {
    const user: Users = {username, password};
    this.http
       .post<{ message: string }>('http://localhost:3000/api/user', user)
       .subscribe(responseData => {
         console.log(responseData.message);
         this.user.push(user);
         this.userUpdated.next([...this.user]);
       });
   }

  getUser() {
    this.http
    .get<{ user: Users[] }>(
      'http://localhost:3000/api/user'
    )
    .subscribe(postData => {
      this.user = postData.user;
      this.userUpdated.next([...this.user]);
    });
  }

  getUserUpdateListener() {
    return this.userUpdated.asObservable();
  }

}
