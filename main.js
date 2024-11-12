// let productName = document.querySelector('#productName');
// let productPrice = document.querySelector('#productPrice');
// let productCategory = document.querySelector('#productCategory');
// let productDescription = document.querySelector('#productDescription');
// let productImage = document.querySelector('#productImage');
// let addBtn = document.querySelector('#btnAdd');
// let btnUpdate = document.querySelector('#btnUpdate');
// let content = document.querySelector('.content');
// let searchInput = document.querySelector('#searchInput');

// var productList = [];

// if (localStorage.getItem("productList") !== null) {
//     productList = JSON.parse(localStorage.getItem("productList"));
//     displayProduct();
// }

// // console.log(localStorage.getItem("productContainer"));
// // console.log(JSON.parse(localStorage.getItem("productContainer")));

// function addProduct() {

//    console.log( `images/products/${productImage.files[0]?.name}`);


//     var productValues = {
//         name: productName.value,
//         price: productPrice.value,
//         category: productCategory.value,
//         description: productDescription.value,
//         image:productImage.files.name ? `products/images/${productImage.files.name}`: 'products/images/gg.jpeg',
//     };

//     productList.push(productValues);
//     localStorage.setItem("productList", JSON.stringify(productList));
//     displayProduct();
//     console.log(productList);
// }

// function displayProduct() {
//     var tableData;
//     content.innerHTML = "";
//     for (var i = 0; i < productList.length; i++) {
//         tableData += `
//                 <tr>
//                     <td>${i + 1}</td>
//                     <td>${productList[i].name}</td>
//                     <td>${productList[i].price}</td>
//                     <td>${productList[i].category}</td>
//                     <td>${productList[i].description}</td>
//                     <td><img width="100px" src="${productList[i].image}" alt=""></td>
//                     <td>
//                         <button type="button" class="btn btn-outline-warning btn-sm">Update</button>
//                         <button type="button" onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm">Delete</button>
//                     </td>
//                 </tr>
//     `
//     }
//     content.innerHTML = tableData;

// }



// function clearForm() {
//     productName.value = "";
//     productCategory.value = "";
//     productDescription.value = "";
//     productImage.value = "";
//     productPrice.value = "";

// }

// addBtn.addEventListener('click', () => {
//     addProduct();
//     //    displayProduct();
//     clearForm();
// })

// function deleteProduct(index) {
//     productList.splice(index, 1);
//     localStorage.setItem("productList", JSON.stringify(productList));
//     displayProduct();
//     console.log(productList);

// }

// function searchProduct() {
//     var term = searchInput.value;
//     var tableData;
//     content.innerHTML = "";
//     for (var i = 0; i < productList.length; i++) {
//       if(productList[i].name.toLowerCase().includes(term.toLowerCase())){
//         tableData += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${productList[i].name}</td>
//             <td>${productList[i].price}</td>
//             <td>${productList[i].category}</td>
//             <td>${productList[i].description}</td>
//             <td><img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s" alt=""></td>
//             <td>
//                 <button type="button" class="btn btn-outline-warning btn-sm">Update</button>
//                 <button type="button" onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm">Delete</button>
//             </td>
//         </tr>
// `
//       }
//     }
//     content.innerHTML = tableData;
// }

// searchProduct();

let productName = document.querySelector('#productName');
let productPrice = document.querySelector('#productPrice');
let productCategory = document.querySelector('#productCategory');
let productDescription = document.querySelector('#productDescription');
let productImage = document.querySelector('#productImage');
let addBtn = document.querySelector('#btnAdd');
let updateBtn = document.querySelector('#btnUpdate');
let content = document.querySelector('.content');
let searchInput = document.querySelector('#searchInput');
var index = 0;
let productList = [];

let errorMsgName = document.querySelector('.errorMsgName');
let  errorMsgPrice = document.querySelector('.errorMsgPrice');

console.log(localStorage.getItem("productList"));
console.log(JSON.parse(localStorage.getItem("productList")));



if (localStorage.getItem("productList") !== null) {
    productList = JSON.parse(localStorage.getItem("productList"));
    addProduct();
}

function addProduct() {
 if(validateName()  &&
  validatePrice()  &&
  validateCategory()  &&
  validateDescription()  &&
  validateImage())
  {
    var productValues = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDescription.value,
        image: productImage.value,
    };

    productList.push(productValues);
    localStorage.setItem("productList", JSON.stringify(productList));
    displayProducts();
    console.log(productList);
 }

}

function displayProducts() {
    content.innerHTML = "";
    var productData;
    for (var i = 0; i < productList.length; i++) {
        productData += `
    <tr>
                    <td>${i + 1}</td>
                    <td>${productList[i].name}</td>
                    <td>${productList[i].price}</td>
                    <td>${productList[i].category}</td>
                    <td>${productList[i].description}</td>
                    <td><img width="100px" src="" alt=""></td>
                    <td>
                        <button type="button" onclick="lifttingValuesToInputs(${i})" class="btn btn-outline-warning btn-sm">Update</button>
                        <button type="button" onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm">Delete</button>
                    </td>
                </tr>
    `
    }
    content.innerHTML = productData;
}

function clearForm() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
    productImage.value = "";

    productName.classList.remove('is-valid');
    productPrice.classList.remove('is-valid');
    productCategory.classList.remove('is-valid');
    productDescription.classList.remove('is-valid');
    productImage.classList.remove('is-valid');
}


function deleteProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem("productList", JSON.stringify(productList));
    displayProducts();
    console.log(productList);

}


function searchProducts() {
    let term = searchInput.value;
    content.innerHTML = "";
    var productData;
    for (var i = 0; i < productList.length; i++) {

        if (productList[i].name.toLowerCase().includes(term.toLowerCase())) {
            productData += `
        <tr>
                    <td>${i + 1}</td>
                    <td>${productList[i].name}</td>
                    <td>${productList[i].price}</td>
                    <td>${productList[i].category}</td>
                    <td>${productList[i].description}</td>
                    <td><img width="100px" src="" alt=""></td>
                    <td>
                        <button type="button" class="btn btn-outline-warning btn-sm">Update</button>
                        <button type="button" onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm">Delete</button>
                    </td>
                </tr>
    `

        }
    }
    console.log(productList.name);
    
    content.innerHTML = productData;
}



function lifttingValuesToInputs(indexElement) {
    productName.value = productList[indexElement].name;
    productPrice.value = productList[indexElement].price;
    productCategory.value = productList[indexElement].category;
    productDescription.value = productList[indexElement].description;
    productImage.value = productList[indexElement].image;

    addBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');
    index = indexElement;
}

function updateProduct() {
    var productValues = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDescription.value,
        image: productImage.value,
    };

    productList.splice(index, 1, productValues);
    localStorage.setItem("productList", JSON.stringify(productList));
    displayProducts();
    
    clearForm();
}

addBtn.addEventListener('click', () => {
    addProduct();
    clearForm();
});


// validation

function validateName() {
    var name = productName.value;
    var nameRegex = /^[A-z][a-z]{3,8}$/;
    window.onload = function() {
        errorMsgName.classList.add('d-none');
        productName.classList.remove('is-invalid');
    };

    if (nameRegex.test(name) == true) {

        errorMsgName.classList.add('d-none');
        productName.classList.remove('is-invalid');
        productName.classList.add('is-valid');

    } else {
        productName.classList.remove('is-valid');
        productName.classList.add('is-invalid');
        errorMsgName.classList.remove('d-none');
    }
   return true;
}

function validatePrice() {

    window.onload = function() {
        errorMsgPrice.classList.add('d-none');
        productPrice.classList.remove('is-invalid');
    };
    var price = productPrice.value;
    var priceRegex = /^(5|[6-9]|\d{2}|100)$/;
    if (priceRegex.test(price) == true) {

        errorMsgPrice.classList.add('d-none');
        productPrice.classList.remove('is-invalid');
        productPrice.classList.add('is-valid');

    } else {
        productPrice.classList.remove('is-valid');
        productPrice.classList.add('is-invalid');
        errorMsgPrice.classList.remove('d-none');
    }

    return true;


}

function validateCategory() {
    let errorMsgCategory= document.querySelector('.errorMsgCategory');
    var category = productCategory.value;
    var categoryRegex = /^(Tv|mobile|screens|camera)$/i;
    window.onload = function() {
        errorMsgCategory.classList.add('d-none');
        productCategory.classList.remove('is-invalid');
    };

    if (categoryRegex.test(category) == true) {

        errorMsgCategory.classList.add('d-none');
        productCategory.classList.remove('is-invalid');
        productCategory.classList.add('is-valid');

    } else {
        productCategory.classList.remove('is-valid');
        productCategory.classList.add('is-invalid');
        errorMsgCategory.classList.remove('d-none');
    }
   return true;
}

function validateDescription() {
    let errorMsgDescription= document.querySelector('.errorMsgDescription');
    var description = productDescription.value;
    var descriptionRegex = /^[A-z][a-z]{3,20}$/;
    window.onload = function() {
        errorMsgDescription.classList.add('d-none');
        productDescription.classList.remove('is-invalid');
    };

    if (descriptionRegex.test(description) == true) {

        // errorMsgDescription.classList.add('d-none');
        productDescription.classList.remove('is-invalid');
        productDescription.classList.add('is-valid');

    } else {
        productDescription.classList.remove('is-valid');
        productDescription.classList.add('is-invalid');
        errorMsgDescription.classList.remove('d-none');
    }
   return true;
}

function validateImage() {
    let errorMsgImage= document.querySelector('.errorMsgImage');
    var image = productImage.value;
    var imageRegex = /^.{1,}\.(jpg|png|avif|jpeg|svg)$/;
    window.onload = function() {
        errorMsgImage.classList.add('d-none');
        productImage.classList.remove('is-invalid');
    };

    if (imageRegex.test(image) == true) {

        errorMsgImage.classList.add('d-none');
        productImage.classList.remove('is-invalid');
        productImage.classList.add('is-valid');

    } else {
        productImage.classList.remove('is-valid');
        productImage.classList.add('is-invalid');
        errorMsgImage.classList.remove('d-none');
    }
   return true;
}