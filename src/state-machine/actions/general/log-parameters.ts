export const logParameters = ({ context }: any, params: string[]): void => {
  const { config } = context;
  if (config.is_debug) {
    console.log("START PRINTING PARAMETERS ACTION");
    params.forEach((key) => {
      console.log(`${key}: ${JSON.stringify(context[key])}`);
    });
    console.log("END PRINTING PARAMETERS ACTION");
  }
};
