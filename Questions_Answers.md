                                        Answer to the Question No - 1
                                    -------------------------------------

1. getElementById():
এই method দিয়ে ID ব্যবহার করে একটি element select করা হয়।
কারণ 1টি ID normally unique হয়, তাই একটা elementই return করে।
ex: document.getElementById("Fahim");

2. getElementsByClassName()
এই method use করে class name দিয়ে অনেকগুলো element select করা যায়।
এটা HTMLCollection return করে (দেখতে array like)।
ex: document.getElementsByClassName("card");

3. querySelector()
এটা CSS selector use করে 1st matching element return করে।
ex: document.querySelector(".card");

4. querySelectorAll()
এটা CSS selector দিয়ে সব matching elements select করে and NodeList return করে।
ex: document.querySelectorAll(".card");



                                        Answer to the Question No - 2
                                    -------------------------------------


DOM এ নতুন element create করার জন্য createElement() ব্যবহার করি।
Then appendChild() or append() দিয়ে সেটাকে page এ add করি।
ex: 
const newDiv = document.createElement("div");
newDiv.innerText = "CSE Pari Nah";
document.body.appendChild(newDiv);



                                        Answer to the Question No - 3
                                    -------------------------------------


Event Bubbling means, event first triggers the child element, then goes to the parent element.

ex:
Consider a button is inside a div.
If I click the button, then:
	1.	First, the button’s event will run.
	2.	Then, the div’s event will run.
In this way, the event moves from the child element to the parent element. This process is called event bubbling...



                                        Answer to the Question No - 4
                                    -------------------------------------


Event Delegation is a technique, where the event listener is provided to the parent element, but not in the child elements.
ex:
document.getElementById("list").addEventListener("click", function(e){
    console.log(e.target);
});
This technique handles parent element event...

It is useful, because:
-> doesn't require more event listener.
-> better performance.
-> event still works if we add new element.


                                        Answer to the Question No - 5
                                    -------------------------------------


1. preventDefault()
It stops the default behavior of the browser.
ex: event.preventDefault();
Stops form submit or link redirect.


2. stopPropagation()
It stops event bubbling, that means event doesn't go to the parent element no more.
ex: event.stopPropagation();
