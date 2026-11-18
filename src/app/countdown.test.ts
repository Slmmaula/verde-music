import { describe, expect, it } from 'vitest'
import { getTimeLeft } from './countdown'

const target = new Date('2026-11-25T08:00:00+07:00')
const secondsBefore = (seconds: number) => new Date(target.getTime() - seconds * 1000)

describe('getTimeLeft', () => {
  it('returns exactly seven days when the target is seven days away', () => {
    expect(getTimeLeft(target, secondsBefore(7 * 86400))).toEqual({
      days: 7,
      hours: 0,
      minutes: 0,
      seconds: 0,
      done: false,
    })
  })

  it('splits the remaining time into days, hours, minutes and seconds', () => {
    expect(getTimeLeft(target, secondsBefore(86400 + 2 * 3600 + 3 * 60 + 4))).toEqual({
      days: 1,
      hours: 2,
      minutes: 3,
      seconds: 4,
      done: false,
    })
  })

  it('rounds partial seconds down', () => {
    const now = new Date(target.getTime() - 1500)
    expect(getTimeLeft(target, now)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 1,
      done: false,
    })
  })

  it('is done at and after the target time', () => {
    const done = { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
    expect(getTimeLeft(target, target)).toEqual(done)
    expect(getTimeLeft(target, secondsBefore(-60))).toEqual(done)
  })
})
