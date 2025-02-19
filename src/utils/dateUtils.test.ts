import { formatTimestampToTime } from "./dateUtils";

describe('utils', () => {
  describe('formatTimestampToTime', () => {
    it('transform timestamp to format MM:SS:sss', () => {
      expect(formatTimestampToTime(8.434188048109025)).toBe('0:8:434');
    });

  })
})
