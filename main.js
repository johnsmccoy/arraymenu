const menu = [
    {
        name: "Frappe McFrapperson",
        price: 6.99,
        category: "beverage",
        size: ["8 oz", "16 oz", "52 oz"]
    },
    {
        name: "Scone",
        price: 6.66,
        category: "pastry",
        size: ["mini", "regular", "large"]
    },
    {
        name: "T-shirt",
        price: 1000.00,
        category: "merchandise",
        size: [
            {
                description: "S",
                material: "Rayon"
            },
            {
                description: "M",
                material: "Cotton"
            },
            {
                description: "L",
                material: "Asbestos"
            }
        ]
    }
  ]
  
  const printMenu = () => {
    menu.forEach((currentMenuItem, index) => {
        console.log(`${index+1}. ${currentMenuItem.name} ($${currentMenuItem.price})`)
        currentMenuItem.size.forEach(currentSize => {
            console.log(currentSize.description)
        })
    })
  }
  
  const server = Object.create(null, {
    name: {
      value: "Handsome Jake",
      enumerable: true
    },
    employeeID: {
      value: 123789,
      enumerable: true
    },
    ringUpOrder: {
      value: function(item) {
        menu.forEach((menuItem) => {
          if(menuItem.name === item){
            console.log(`Your total is ${menuItem.price}`)
          }
        })
      },
    },
    deliverOrder: {
      value: function(item){
        console.log(`Here is your order: ${item}! Have a good day!`);
        
      }
    }
  })
  
  const customer = Object.create(null, {
    name: {
      value: "Thanos",
      enumerable: true
    },
    purchaseItem: {
      value: function(item) {
        console.log(`I would like to purchase ${item}`);
      }
    },
    payForOrder: {
      value: function(paymentMethod){
        console.log(`I would like to pay using ${paymentMethod}`);
        
      }
    }
  })
  
  customer.purchaseItem("Frappe McFrapperson")
  server.ringUpOrder("Frappe McFrapperson")
  customer.payForOrder("Cash")
  server.deliverOrder("Frappe McFrapperson")