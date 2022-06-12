import { v4 as uuidv4 } from 'uuid';

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

export const data: Data = {
  report: [
    {
      id: uuidv4(),
      source: 'Gehalt',
      amount: 2950,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: uuidv4(),
      source: 'DJing',
      amount: 1500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: uuidv4(),
      source: 'Lebensmittel',
      amount: 500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: uuidv4(),
      source: 'Lebensmittel',
      amount: 5000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
  ],
};

data.report.push({
  id: uuidv4(),
  source: 'Gehalt',
  amount: 7500,
  created_at: new Date(),
  updated_at: new Date(),
  type: ReportType.EXPENSE,
});
