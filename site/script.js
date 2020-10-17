let itemList = [];
function addItem() {
    var item = document.getElementById("itemInput").value;
    itemList.push(item);
    htmlContent = ''
    for (item in itemList) {
        htmlContent = htmlContent + "<li>" + itemList[item] + "<button onclick ='delFromArray(this.id)' id='" + item + "'>delete</button>" + "</li>";
    }
    document.getElementById("myList").innerHTML = htmlContent

}
function delFromArray(id) {
    itemList.splice(id, 1)
    htmlContent = ''
    for (item in itemList) {
        htmlContent = htmlContent + "<li>" + itemList[item] + "<button onclick ='delFromArray(this.id)' id='" + item + "'>delete</button>" + "</li>";
    }
    document.getElementById("myList").innerHTML = htmlContent
}