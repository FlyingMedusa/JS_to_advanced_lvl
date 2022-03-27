function myFunction() {
    const sum1 = 2 + 2;
    const sum2 = 2 + '2';
    const multi1 = 4 * 4;
    const multi2 = 4 * '4';
    document.getElementById("adding").innerHTML = "2 + 2 = " + sum1 + "<br>2 + '2' = " + sum2;
    document.getElementById("multiplying").innerHTML = "4 * 4 = " + multi1 + "<br>4 * '4' = " + multi2;

    const and1 = true && 5;
    const and2 = 5 && true;
    document.getElementById("ands").innerHTML = "true && 5 = " + and1 + "<br>5 && true = " + and2;

    const list1 = [1, 2, 3];
    const list1_len = list1.length;
    const sec_el = list1[1];
    const last_el = list1[ list1.length-1];
    //list1[list1.length]= 4;
    document.getElementById("lists").innerHTML = "The length of an array: " + list1 + " equals: " + list1_len + " and the second element is: " +sec_el + ". The last element is: " + last_el;

    const myArray = [11,22,33,44, 55];
    myArray.push('Nowa liczba');
    console.log(myArray);
    myArray.splice(myArray.length - 3, 2)
    console.log(myArray);
    myArray.length = 20;
    console.log(myArray);

    const charsArray = ['c', 'w', 'a', 'B'];
    charsArray.sort();
    console.log(charsArray);
  }