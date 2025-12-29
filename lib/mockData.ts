export const MOCK_BREACHES = [
  {
    Name: "LinkedIn",
    Domain: "linkedin.com",
    BreachDate: "2021-04-08",
    Description: "In April 2021, a large dataset of 500 million LinkedIn users was scraped and posted for sale online. The data included email addresses, phone numbers, gender, and job titles.",
    DataClasses: ["Email addresses", "Job titles", "Phone numbers", "Social media profiles"],
    IsVerified: true,
    LogoPath: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
  },
  {
    Name: "Facebook",
    Domain: "facebook.com",
    BreachDate: "2019-08-30",
    Description: "A massive dataset of over 533 million Facebook users was made publicly available. The data included phone numbers, full names, locations, email addresses, and biographical information.",
    DataClasses: ["Phone numbers", "Full names", "Locations", "Email addresses", "Birthdates"],
    IsVerified: true,
    LogoPath: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
  },
  {
    Name: "Adobe",
    Domain: "adobe.com",
    BreachDate: "2013-10-04",
    Description: "The Adobe hack impacted 153 million accounts. The breach exposed customer names, IDs, encrypted passwords, and debit/credit card information.",
    DataClasses: ["Email addresses", "Encrypted passwords", "Password hints", "Usernames"],
    IsVerified: true,
    LogoPath: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png"
  },
  {
    Name: "Uber",
    Domain: "uber.com",
    BreachDate: "2016-10-01",
    Description: "Uber suffered a massive data breach exposing the data of 57 million customers and drivers. The company paid hackers $100,000 to delete the data and keep the breach quiet for over a year.",
    DataClasses: ["Email addresses", "Mobile numbers", "Names", "Driver License Numbers"],
    IsVerified: true,
    LogoPath: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
  },
  {
    Name: "Dropbox",
    Domain: "dropbox.com",
    BreachDate: "2012-07-01",
    Description: "Cloud storage service Dropbox suffered a breach of over 68 million accounts. The data contained email addresses and salted and hashed passwords.",
    DataClasses: ["Email addresses", "Passwords"],
    IsVerified: true,
    LogoPath: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg"
  },
  {
    Name: "Canva",
    Domain: "canva.com",
    BreachDate: "2019-05-24",
    Description: "In May 2019, the graphic design tool Canva was hacked. 137 million users were affected. Data exposed included email addresses, names, cities, and salted password hashes.",
    DataClasses: ["Email addresses", "Geographic locations", "Names", "Passwords"],
    IsVerified: true,
    LogoPath: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg"
  },
  {
    Name: "MyFitnessPal",
    Domain: "myfitnesspal.com",
    BreachDate: "2018-02-01",
    Description: "The MyFitnessPal application suffered a data breach affecting 144 million users. The compromised data included usernames, email addresses, and IP addresses.",
    DataClasses: ["Email addresses", "IP addresses", "Passwords", "Usernames"],
    IsVerified: true,
    LogoPath: "https://upload.wikimedia.org/wikipedia/commons/4/44/MyFitnessPal_Logo.jpg"
  },
  {
    Name: "Twitter",
    Domain: "twitter.com",
    BreachDate: "2023-01-04",
    Description: "Over 200 million Twitter profiles were scraped and published on a hacking forum. The database contained email addresses linked to usernames, allowing anonymous accounts to be de-anonymized.",
    DataClasses: ["Email addresses", "Usernames", "Account creation dates", "Follower counts"],
    IsVerified: true,
    LogoPath: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
  }
];