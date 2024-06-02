import MillionLint from '@million/lint';
import million from 'million/compiler';
/** @type {import('next').NextConfig} */
const nextConfig = {};
export default million.next(MillionLint.next({
  rsc: true
})(nextConfig), {
  auto: true
});