//14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
// includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
// Create a list of guests
var guestList = ["Albert Einstein", "Ada Lovelace", "Elon Musk"];
// Function to print a dinner invitation
var sendInvitation = function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. I would be honored to have you join me!"));
};
// Iterate through the guest list and send invitations
guestList.forEach(sendInvitation);
//15.	Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Initial list of guests
var guestList1 = ["Albert Einstein", "Ada Lovelace", "Elon Musk"];
// Announce that one guest can't make it
var unavailableGuest = "Ada Lovelace";
console.log("".concat(unavailableGuest, " cannot make it to the dinner."));
// Replace the unavailable guest with a new one
var newGuest = "Marie Curie";
guestList1 = guestList.map(function (guest) { return guest === unavailableGuest ? newGuest : guest; });
// Function to print a dinner invitation
var sendInvitation1 = function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. I would be honored to have you join me!"));
};
// Iterate through the updated guest list and send new invitations
guestList.forEach(sendInvitation);
