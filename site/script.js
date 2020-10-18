let itemList = [];

function viewItems() {
    htmlContent = ''
    for (item in itemList) {
        htmlContent = htmlContent + "<li> <div class='m-1' style='float:left'>" + itemList[item] + " </div> <div style='float:right' class='text-right'><button class='btn btn-danger m-1 ' onclick ='delFromArray(this.id)' id='" + item + "'>delete</button> </div>" + "</li>";
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
    var confirmDelete = confirm("Are you sure, you want to delete this item ?");
    if (confirmDelete) {
        itemList.splice(id, 1)
    }
    viewItems();

}
function clearAll() {
    var confirmDelete = confirm("Are you sure, you want to delete this item ?");
    if (confirmDelete) {
        itemList = [];
    }
    viewItems();
}
