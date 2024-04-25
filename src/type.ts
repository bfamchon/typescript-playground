type ExistingPropsFromLibrary = {
  existingProp: string;
};

type ReactComponentProps = ExistingPropsFromLibrary & {
  myCustomProp: string;
};

type Person = {
  name: string;
  age?: number;
};

const myConst: Person[] = [{ name: 'toto', age: 12 }, { name: 'tata' }];

const nameAndAge = (person: Person) => {
  return `${person.name} is ${person.age ?? 0} years old`;
};

const printAgeType = (age: number | string) => {
  if (typeof age === 'string') {
    console.log('age is a string');
  } else {
    console.log('age is a number');
  }
};
printAgeType(12);
printAgeType('12');
