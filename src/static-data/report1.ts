import { faker } from "@faker-js/faker";
import type { SexType } from "@faker-js/faker";

type SubscriptionTier = "free" | "basic" | "business";

export type User = {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  subscriptionTier: SubscriptionTier;
};

export const createRandomUser = (): User => {
  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.name.sexType(),
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
  };
};

type Type = "type1" | "type2" | "type3";

export type Facts = {
  date: Date;
  interactions: string;
  type: Type;
};

export const createRandomFacts = (): Facts => {
  return {
    date: faker.date.birthdate(),
    interactions: faker.random.numeric(2),
    type: faker.helpers.arrayElement(["type1", "type2", "type3"]),
  };
};
