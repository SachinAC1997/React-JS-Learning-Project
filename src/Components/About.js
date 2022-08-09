const About = () => {
  return (
    <div className="Apps">
      <h1 className="about-header">About this Website</h1>
      <div className="about-text">
        <p>
          <b>T</b>his website is developed as a react js learning project. This website contains navigation bar such as Home page, About page,
          Products page, Orders, Task Tracker, Profile page, Login page. I tried my best to style this website and i am still learning in React 
          hence i have used only some hooks for this website designed
        </p>
      </div>
      <div className="about-body">
        <div className="about-1">
          <h2>Tools used</h2>
          <ul>
            <li>React JS - 18.1.0</li>
            <li>Visual Studio - 1.69</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JSON Server - 0.17.0</li>
          </ul>
        </div>
        <div className="about-2">
          <h2>Contact Details</h2>
          <p><b>Name:</b> Sachin A C</p>
          <p><b>Email:</b> sachinac15@gmial.com</p>
        </div>
      </div>
      <div className="about-div">
        <h2>JSON Server</h2>
        <p>
          <b>A</b>ll entered data is stored inside JSON server. Fetch function is used to fetch data from json server. POST, PUT, PATCH, DELETE method are used in this project. 
        </p>
      </div>
      <div className="about-div">
        <h2>Products Page</h2>
        <p>
          <b>P</b>roduct page contains 18 products. User can add any number of product using "Add product" button. Product includes "Order" button and "Quantity" input value.
          Using quantity we can choose how many products we need to order, reset button is used reset all the order and quantity of products. Select input button gives us a
          option to choose type of product you want to show in product page like "if the product is belongs to category of All, Mobiles, Home Appliances, Clothes, Electronics,
          Books, Toys, Pharmacy". If we choose "all" option it gonna display all the products. If we order a product the border of that product is gonna change its color for 
          easy identification of ordered product. Product background color gonna change if the cursor move over the product.
        </p>
      </div>
      <div className="about-div">
        <h2>Orders List</h2>
        <p>
          <b>T</b>he orders list page contains table of products we ordered in product page. It is designed in a easy to understand the list of ordered product with total 
          price of ordered product. Table row color will change if the cursor move over it. The total price for each product and all the product can be observed in that table.  
        </p>
      </div>
      <div className="about-div">
        <h2>Task Tracker</h2>
        <p>
           <b>I</b>n task tracker we can add number of task and those task will show one by one. We can delete the task by clicking at red <b style={{color: 'red'}}>"X"</b> 
           mark. Task tracker has date and time property using this we can set date and time. An alert box will pop-up if the date and time in tasks is matched with the 
           current time. By clicking add button we can add task and it will open form to add a task. Double clicking on task will result in toggling of remainder for that task.
        </p>
      </div>
      <div className="about-div">
        <h2>Login Page</h2>
        <p>
          Login page contains two components, "Sign In" an "Sign Up" form. If the user do not have account then user can creat account in sign up form. By pressing 
          Sign-in button user can login to website by filling the form details in  sign-in page. An alert message shown if user try to creat multiple same username. 
          In login form the alert will shown if user entered wrong information. 
        </p>
      </div>
      <div className="about-div">
        <h2>profile Page</h2>
        <p>
          If the user entered details in login page is correct then profile page is shown. User can fill the form in profile page and save it. Clicking "logout" 
          button result in logout form the profile page.
        </p>
      </div>
    </div>
  )
}

export default About
