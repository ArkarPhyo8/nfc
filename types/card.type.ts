export type themeDataType = {
  id: string;
  name: string;
};

export type serviceType = {
  id: string;
  name: string;
};
export type companyDataType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  services: serviceType[];
  about: string;
};

export type userDataType = {
  id: string;
  username: string;
  age: number;
  address: string;
  email: string;
  image: string;
  service: {
    id: string;
    name: string;
  }[];
  fb_link: string;
  youtube_link: string;
  instagram_link: string;
  tiktok_link: string;
  WebUUID: string;
  phoneNo: string;
};

export type cardDataType = {
  id: string;
  cardName: string;
  cardUUID: string;
  cardType: string;
  status: boolean;
  user: userDataType;
  company: companyDataType[];
  themes: string;
};
