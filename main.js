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
var index=0;
let productList = [];

console.log(localStorage.getItem("productList"));
console.log(JSON.parse(localStorage.getItem("productList")));



if (localStorage.getItem("productList") !== null) {
    productList = JSON.parse(localStorage.getItem("productList"));
    addProduct();
}

function addProduct() {
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
    content.innerHTML = productData;
}



function lifttingValuesToInputs(indexElement){
    productName.value=productList[indexElement].name;
    productPrice.value=productList[indexElement].price;
    productCategory.value=productList[indexElement].category;
    productDescription.value=productList[indexElement].description;
    productImage.value=productList[indexElement].image;

    addBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');

    index = indexElement;
}

function updateProduct(){
    var productValues = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDescription.value,
        image: productImage.value,
    };

    productList.splice(index,1,productValues);
    displayProducts();
    localStorage.setItem("productList",JSON.stringify(productList));
    clearForm();
}

addBtn.addEventListener('click', () => {
    addProduct();
    clearForm();
});


