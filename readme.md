##Comments:

Removing wholesaler from the contacts is removing a value. The second contact has the value Sysco which could be an indication of data corruption or bad data entry. This depends on where the data came from. 

###Good Software is software that works.

* If this was the only issue I would manually handle it. I'd perform a little research to find out. 

* If this is part of a data conversion project this might similarly occur in other data models. I would write a generic conversion that could be configured to execute this process on other models as well.

* If I created the JSON format as part of the application I would hope I wouldn't create this structure in the first place. 

###Good Software is testable. 
  
* I did not use a test library, but I have verified the result matches what is expected in this trival example. 

##Good Software is maintainable. 
  
* Software should be able to be changed in isolation. 
  
* Code should be self documenting explaining what is being done and the how (implementation) being hidden, which allows change in isolation. 


##Challenge Details:

Instructions: Solve the challenge below using the programming language of your choice.  Use this opportunity to demonstrate your ideas about what makes good software.  Please provide your solution in a public source code repository of your choice.

Purpose: Clean nested repeated fields from a JSON document.

Details: A field is repeated if the name of the field exists at a higher level of nesting.  A field is not repeated if the field name occurs in a sibling object tree.

In this example, the "wholesaler" field should be removed from all the objects in the "contacts" array, since it occurs in the outermost object.

Before:

{
  "wholesaler":"US Foods",
  "delivered":"2015-06-19T05:15:00-0500",
  "contacts": [
    {
      "wholesaler":"US Foods",
      "name":"John Lederer"
    },
    {
      "wholesaler":"Sysco",
      "name":"Bill Delaney"
    }
  ]
}

After:
{
  "wholesaler":"US Foods",
  "delivered":"2015-06-19T05:15:00-0500",
  "contacts": [
    {
      "name":"John Lederer"
    },
    {
      "name":"Bill Delaney"
    }
  ]
}
