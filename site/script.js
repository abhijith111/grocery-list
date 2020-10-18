let itemList = [];

function viewItems() {
    htmlContent = ''
    for (item in itemList) {
        htmlContent = htmlContent + "<li>" + itemList[item] + "<button class='btn btn-danger   m-1' onclick ='delFromArray(this.id)' id='" + item + "'>delete</button>" + "</li>";
    }
    document.getElementById("myList").innerHTML = htmlContent;
    document.getElementById("itemInput").value = null;
}

function addItem() {
    var item = document.getElementById("itemInput").value;
    itemList.push(item);
    viewItems();
}
function delFromArray(id) {
    itemList.splice(id, 1)
    viewItems();    
}
function clearAll() {
    itemList = [];
    viewItems();
}
