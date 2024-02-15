const mongoose = require("mongoose");

const pr = {
  type: mongoose.Schema.Types.ObjectId,
  ref: "PersonalityTrait",
};

const userSchema = new mongoose.Schema({
  photos: [String],
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  height: Number,
  passion: [pr],
  relationshipGoal: pr,
  relationshipType: pr,
  languages: [pr],
  basicInformation: {
    zodiac: pr,
    education: pr,
    familyPlan: pr,
    personalityType: pr,
    communication: pr,
    style: {
      type: String,
      enum: ["Casual", "Formal", "Sporty", "Bohemian", "Other"],
    },
    loveStyle: {
      type: String,
      enum: ["Romantic", "Adventurous", "Companionate", "Independent", "Other"],
    },
  },
  lifestyle: {
    pets: pr,
    smoking: pr,
    drinking: pr,
    workout: pr,
    dietaryPreference: pr,
    socialMedia: pr,
    sleeping: pr,
  },
  habits: pr,
  jobTitle: pr,
  company: pr,
  school: pr,
  livingIn: pr,
  gender: pr,
  sexualOrientation: pr,
});

const User = mongoose.model("User", userSchema);

module.exports = User;



const personalityTraitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    subtype: String
  });
  
  const PersonalityTrait = mongoose.model('PersonalityTrait', personalityTraitSchema);
  
  module.exports = PersonalityTrait;


  const dummy = {
    photos: [
      "https://images.pexels.com/photos/19977700/pexels-photo-19977700/free-photo-of-a-waterfall-is-shown-in-a-photo.jpeg",
      "https://images.pexels.com/photos/19949053/pexels-photo-19949053/free-photo-of-a-man-walking-in-the-shadow-of-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/11719062/pexels-photo-11719062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/11719062/pexels-photo-11719062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/19577242/pexels-photo-19577242/free-photo-of-young-woman-in-a-dress-holding-a-vintage-telephone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/19400415/pexels-photo-19400415/free-photo-of-a-person-paragliding-over-a-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    name: "Kohn Doe",
    about: "I enjoy long walks on the beach and reading books.",
    height: 175,
    dateOfBirth: "1990-05-15",
    passion: [
      { name: "Adventure", subtype: "passion" },
      { name: "Creativity", subtype: "passion" },
      { name: "Fitness", subtype: "passion" },
    ],
    relationshipGoal: {
      name: "Long-Term Relationship",
      subtype: "relationshipGoal",
    },
    relationshipType: { name: "Monogamous", subtype: "relationshipType" },
    languages: [
      { name: "English", subtype: "languages" },
      { name: "Spanish", subtype: "languages" },
    ],
    basicInformation: {
      zodiac: { name: "Leo", subtype: "zodiac" },
      education: { name: "Bachelor's Degree", subtype: "education" },
      familyPlan: { name: "Undecided", subtype: "familyPlan" },
      personalityType: { name: "Introverted", subtype: "personalityType" },
      communication: { name: "Good Listener", subtype: "communication" },
      style: "Casual",
      loveStyle: "Romantic",
    },
    lifestyle: {
      pets: { name: "Dog Lover", subtype: "pets" },
      smoking: { name: "Non-Smoker", subtype: "smoking" },
      drinking: { name: "Social Drinker", subtype: "drinking" },
      workout: { name: "Regular Exercise", subtype: "workout" },
      dietaryPreference: { name: "Vegetarian", subtype: "dietaryPreference" },
      socialMedia: { name: "Active User", subtype: "socialMedia" },
      sleeping: { name: "Early Bird", subtype: "sleeping" },
    },
    habits: { name: "Night Owl", subtype: "habits" },
    jobTitle: { name: "Software Engineer", subtype: "jobTitle" },
    company: { name: "Tech Co.", subtype: "company" },
    school: { name: "University XYZ", subtype: "school" },
    livingIn: { name: "City", subtype: "livingIn" },
    gender: { name: "Male", subtype: "gender" },
    sexualOrientation: { name: "Heterosexual", subtype: "sexualOrientation" },
    isVerified: true,
  }