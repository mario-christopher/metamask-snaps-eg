export function getByeSnapParams(originString: string) {
    return {
        method: 'snap_confirm',
        params: [
          {
            prompt: `Bye, ${originString}!`,
            description:
              'This custom confirmation is just for display purposes.',
            textAreaContent:
              'But you can edit the snap source code to make it do something, if you want to!',
          },
        ],
      };
}