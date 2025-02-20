export const requestSuccessful = <T>(mockData?: T): void => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  ) as jest.Mock;
}

export const requestFailure = <T>(mockData?: T): void => {
  global.fetch = jest.fn(() =>
    Promise.reject({
      json: () => Promise.resolve(mockData),
    })
  ) as jest.Mock;
}