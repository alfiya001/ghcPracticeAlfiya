import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
// import data from '../../assets/data/products.json';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {

  productList: Product[] = [
    {
      "title": "Groom to Perfection: Aloe Vera Hair Mask for Men's Hair Care",
      "bytitle" : "By Mars by GHC on Jun 22, 2022",
      "image": "../../assets/slider2/img1.png"
    },
    {
      "title": "Coffee for Hair Growth: Brew Up Longer, Thicker Hair with Coffee",
      "bytitle" : "By Mars by GHC on Jun 22, 2022",
      "image": "../../assets/slider2/img2.png"
    },
    {
      "title": "Maximizing Hair Growth and Health: 7 Benefits of Biotin Hair Gummies",
      "bytitle" : "By Mars by GHC on Jun 22, 2022",
      "image": "../../assets/slider2/img3.png"
    },
    {
      "title": "Vitamin E tabs for hair: Get Lustrous Hair In No Time!",
      "bytitle" : "By Mars by GHC on Jun 22, 2022",
      "image": "../../assets/slider2/img4.png"
    }
  ];
  // jsonData = data as Array<any>;
  direction = "";

  public isCollapsed = false;

  isNavCollapse = false;

  constructor(private scroll: ViewportScroller) { }

  @HostListener('window:scroll', []) onScroll() {
    if (this.scroll.getScrollPosition()[1] > 70) {
      this.isNavCollapse = true;
    } else {
      this.isNavCollapse = false;
    }
  }

  ngOnInit() {
    // for (let i = 0; i < 9; i++) {
    //   let product = new Product(this.jsonData[i]);
    //   this.productList.push(product);
    // }
  }

  onWheel(event: WheelEvent): void {
    if (event.deltaY > 0) this.scrollToRight();
    // else this.scrollToLeft();
  }

  // scrollToLeft(): void {
  //   document.getElementById('scroll-1').scrollLeft -= 400;
  // }

  scrollToRight(): void {
    document.getElementById('scroll-1')!.scrollLeft += 400;
  }
  
}

class Product {
  title: string;
  image: string;
  bytitle: string;

  constructor(product: any = {}) {
    this.title = product.title;
    this.bytitle = product.bytitle;
    this.image = 'https://alcodesbase.blob.core.windows.net/generic/sections-default-image.png';
  }
}
