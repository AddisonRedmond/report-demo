import { faker } from "@faker-js/faker";
import type { SexType } from "@faker-js/faker";

type SubscriptionTier = "free" | "basic" | "business";
export type User = {
  _id: string;
  avatar: string;
  birthday: string;
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
    birthday: faker.date.birthdate().toDateString(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.name.sexType(),
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
  };
};

type Type = "type1" | "type2" | "type3";
export type Facts = {
  date: string;
  interactions: string;
  type: Type;
};

export const createRandomFacts = (): Facts => {
  return {
    date: faker.date.birthdate().toDateString(),
    interactions: faker.random.numeric(2),
    type: faker.helpers.arrayElement(["type1", "type2", "type3"]),
  };
};

export const randomNumber = (date: Date) => {
  return {
    date: date,
    total: faker.random.numeric(4),
  };
};

export const randomUserProductivity = (date: Date, name: string) => {
  return {
    user: name,
    date: date,
    task1: faker.random.numeric(2),
    task2: faker.random.numeric(3),
    task3: faker.random.numeric(3),
  };
};
