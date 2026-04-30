'use client'

import styles from './ProductFilter.module.scss'

export type FilterType = 'todas' | 'aromatica' | 'masaje' | 'kit'

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'Todas', value: 'todas' },
  { label: 'Aromáticas', value: 'aromatica' },
]
interface ProductFilterProps {
  active: FilterType
  total: number
  onChange: (filter: FilterType) => void
}

export default function ProductFilter({ active, total, onChange }: ProductFilterProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`${styles.btn} ${active === f.value ? styles.active : ''}`}
            onClick={() => onChange(f.value)}
          >
            {f.label}
          </button>
        ))}
        <span className={styles.count}>{total} productos</span>
      </div>
    </div>
  )
}