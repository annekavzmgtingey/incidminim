interface Country {
  data: number;
}

class MyCountry implements Country {
  data: number;

  constructor(data: number) {
    this.data = data;
  }

  updateData(newData: number): void {
    this.data = newData;
  }
}

const myCountry = new MyCountry(42);
