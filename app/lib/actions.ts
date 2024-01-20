'use server';

export async function createInvoice(fromData: FormData) {
  const rawformData = {
    customerId: fromData.get('customerId'),
    amount: fromData.get('amount'),
    status: fromData.get('status'),
  };
  console.log(rawformData);
}
