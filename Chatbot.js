module.exports = 
{

	ChatbotReply:function(message)
	{
		// Bot's data
		this.Bot_Age = 21;
		this.Bot_Name = "YOYO BOT - YOYO PIZZA";
		this.Bot_University = "Sri krishna College of Engineering and Technology";
		this.Bot_Country = "India";
		// User data
		this.User_Age;
		this.User_Name;
		this.User_University;
		// Message processing... 
		message= message.toLowerCase()

		if(message.indexOf("hi") > -1 || message.indexOf("hello") > -1 || message.indexOf("hey") > -1 )
		{
			return "welcome to yoyo pizza! What would you like to order?";
		} 
		else if(message.indexOf("pizza") > -1)
		{
			return "In veg,We have Veg Macaroni and Veg Margharita and in Non-Veg, We have Chicken Pizza and Barbeque Mozarella Cheese Double";
		}
		else if(message.indexOf("veg macaroni") > -1 || message.indexOf("veg margharita") >-1 || message.indexOf("chicken pizza") > -1 || message.indexOf("barbeque mozarella double cheese")	>-1)	
		{
			return "Sure! Personal, Medium or Large?";
		}
		else if (message.indexOf("personal") > -1 || message.indexOf("medium") > -1|| message.indexOf("large") >-1 )
		{
			return "Cool! please mention your name!";
		}
		else if(message.indexOf("david") > -1 || message.indexOf("shivani") >-1 || message.indexOf("pranav") >-1)
		{
			return "Great! Enter your Address";
		}
		else if(message.indexOf("no 5 park avenue") > -1 || message.indexOf("no 3 blossom road, rs puram") >-1 || message.indexOf("no 12 parsn apt, race course")>-1)
		{
			return "Thank You, Enter your phone number";
		}
		else if(message.indexOf("123456789")>-1 || message.indexOf("987654321")>-1)
		{
			return "Thankyou, you're grand total is 1900";
		}
		else if(message.indexOf("thank you")>-1 || message.indexOf("thanks")>-1)
		{
			return "You're Welcome! Please Visit us again!";
		}
		else if(message.indexOf("sure")>-1)
		{
			return "Bye! Have a nice day!!!!";
		}
		return "Sorry, I didn't get it :( ";
	}


};