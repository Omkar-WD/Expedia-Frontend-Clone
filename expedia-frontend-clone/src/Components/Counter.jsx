import {
  Input,
  Button,
  HStack,
  useNumberInput,
  NumberInputF,
} from '@chakra-ui/react';

export const Counter = ({ step, defaultValue, min, precision }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step,
      defaultValue,
      min,
      precision,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  const handleChange = () => {
    console.log('changing');
  };

  return (
    <>
      <HStack w='150px' m={2}>
        <Button {...inc}>+</Button>
        <Input {...input} onChange={handleChange} />
        <Button {...dec}>-</Button>
      </HStack>
    </>
  );
};
