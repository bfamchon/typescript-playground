type InsuranceContract = {
  name: string;
  age: number;
};

function updateField<T extends keyof InsuranceContract>(key: T, value: InsuranceContract[T]) {
  return `Updated field ${key} with value ${value}`;
}

updateField('name', 'toto');

function viewModel() {
  return {
    name: 'Baptiste',
    age: 28
  };
}

type MyFunctionReturnType = ReturnType<typeof viewModel>;
