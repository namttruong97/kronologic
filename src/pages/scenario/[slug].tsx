import Swal from 'sweetalert2';

import { useEffect, useState } from 'react';

import { Button, Form, FormProps, Radio, Select } from 'antd';
import dayjs from 'dayjs';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import {
  ENUM_CHARACTER,
  ENUM_DATATYPE,
  SCENARIO,
  SCENARIO_ONE_QUESTIONS,
  SCENARIO_RESULT,
  SCENARIO_THREE_QUESTIONS,
  SCENARIO_TWO_QUESTIONS,
} from 'utils/data';

import { Layout } from 'components/Layout';

type FieldType = {
  character?: string;
  room?: string;
  time?: string;
  game?: string;
};

type QuestionType = {
  question: string;
  type: ENUM_CHARACTER;
  data: {
    label: string;
    value: string;
  }[];
};

const scenarioName = {
  1: SCENARIO.ONE,
  2: SCENARIO.TWO,
  3: SCENARIO.THREE,
};

const scenarioQuest = {
  1: SCENARIO_ONE_QUESTIONS,
  2: SCENARIO_TWO_QUESTIONS,
  3: SCENARIO_THREE_QUESTIONS,
};

const placeholderQuest = {
  [ENUM_DATATYPE.CHARACTER]: 'Select a person',
  [ENUM_DATATYPE.ROOM]: 'Select a room',
  [ENUM_DATATYPE.TIME]: 'Select a time',
};

const fieldTypeQuest = {
  [ENUM_DATATYPE.CHARACTER]: 'character',
  [ENUM_DATATYPE.ROOM]: 'room',
  [ENUM_DATATYPE.TIME]: 'time',
};

export default function CheckPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [disabledSave, setDisabledSave] = useState(true);

  const handleFormChange = () => {
    const formVal = Object.values(form.getFieldsValue()).filter((item) => !!item);
    const countQuestion = slugId === '1' ? 4 : slugId === '2' ? 2 : 3;
    const hasValue = formVal.length !== countQuestion;

    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    setDisabledSave(hasErrors || hasValue);
  };

  const slugId = router.asPath.split('/')?.[2];

  useEffect(() => {
    if (!['1', '2', '3', '[slug]'].includes(slugId)) {
      router.replace('/');
    }
  }, [slugId, router]);

  const generateQuestion = () => {
    const data: QuestionType[] = get(scenarioQuest, slugId);

    return data?.map((item) => {
      const fieldType = get(fieldTypeQuest, item.type);
      return (
        <div
          className="flex items-center justify-center mb-5 bg-gray-100 py-6 rounded-lg shadow"
          key={item.question}
        >
          <h3 className="w-[160px] mb-0">{item.question}</h3>

          <Form.Item name={fieldType} rules={[{ required: true }]} className="mb-0">
            <Select
              className="w-[160px] min-w-[160px]"
              showSearch
              placeholder={get(placeholderQuest, item.type)}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={item.data}
            />
          </Form.Item>
        </div>
      );
    });
  };

  const checkResult = (values: FieldType) => {
    const scenarioResult = get(SCENARIO_RESULT, slugId);
    const valAnswer = Object.values(values);
    console.log('scenarioResult', JSON.stringify(scenarioResult));
    console.log('valAnswer', JSON.stringify(valAnswer));
    return JSON.stringify(scenarioResult).includes(JSON.stringify(valAnswer));
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (checkResult(values)) {
      Swal.fire({
        title: 'Correct!',
        text: `You found the answer at ${dayjs().format('HH:mm')}`,
        icon: 'success',
        confirmButtonText: 'Okay :)',
      });
      return;
    }
    Swal.fire({
      title: 'Wrong!',
      text: 'The answer is not correct',
      icon: 'error',
      confirmButtonText: 'Okay :(',
    });
  };

  return (
    <Layout title={get(scenarioName, slugId)}>
      <h2 className="text-center my-8 font-title font-bold">{get(scenarioName, slugId)}</h2>

      <Form
        form={form}
        name="basic"
        onFieldsChange={handleFormChange}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name="game">
          <Radio.Group className="grid grid-cols-5">
            {[1, 2, 3, 4, 5].map((gameNum) => (
              <Radio.Button className="px-2" key={gameNum} value={gameNum}>
                Game {gameNum}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
        {generateQuestion()}
        <Form.Item label={null} className="text-center mt-10">
          <Button size="large" type="primary" htmlType="submit" disabled={disabledSave}>
            Check the answer
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}
