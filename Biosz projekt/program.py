def transzkripcio(dns_lanc):
    """
    A DNS láncot RNS-be transzkripciós folyamattal alakítja át.
    Args:
        dns_lanc (str): A DNS lánc kódja (A, T, C, G karakterekből áll).

    Returns:
        str: Az RNS lánc kódja (A, U, C, G karakterekből áll).
    """
    # DNS és RNS bázisok közötti párosítás
    kodtabla = {'A': 'U', 'T': 'A', 'C': 'G', 'G': 'C'}

    # Transzkripció
    rns_lanc = ''.join(kodtabla[base] for base in dns_lanc)

    return rns_lanc

# Példa használat
if __name__ == "__main__":
    dns_lanc = "ATCGTAGC"  # Példa DNS lánc
    rns_lanc = transzkripcio(dns_lanc)
    print(f"DNS lánc: {dns_lanc}")
    print(f"RNS lánc: {rns_lanc}")
