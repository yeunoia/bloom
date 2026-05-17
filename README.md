# @yeunoia/bloom

Wrap anything with bloom. → [See Bloom](https://yeunoia-bloom.vercel.app/)

## Install

```
npm install @yeunoia/bloom
```

## Usage

```tsx
import { Bloom } from "@yeunoia/bloom";

<Bloom>highlighted words</Bloom>

```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"box" \| "line"` | `"box"` | `box` wraps the entire element, `line` highlights each line individually |
| `tip` | `"round" \| "square"` | `"round"` | Shape of the highlight corners |
| `scale` | `number` | `4` | Smear intensity. Recommended range: 1–10 |
| `backgroundColor` | `string` | `"#A4E7D5B3"` | Fill color of the highlight |
| `color` | `string` | `"inherit"` | Text color |
| `paddingX` | `number` | `4` | Horizontal padding around the highlight (px) |
| `paddingY` | `number` | `2` | Vertical padding around the highlight (px) |

## Requirements

React ≥ 17
