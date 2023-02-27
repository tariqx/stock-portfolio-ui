// public string Symbol { get; set; }
// public int Shares { get; set; }
// public decimal Price { get; set; }

// public string? TrxType { get; set; } 

export default interface IStock {
    symbol: string,
    shares: string,
    price: number,
    trxType?: string,
    newAllocatedPercentage?: number
  }