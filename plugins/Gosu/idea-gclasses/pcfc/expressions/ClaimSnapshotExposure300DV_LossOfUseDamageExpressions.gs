package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotExposure300DV.LossOfUseDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposure300DV_LossOfUseDamageExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotExposure300DV.LossOfUseDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposure300DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 164, column 46
    function sortValue_49 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 169, column 46
    function sortValue_50 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 174, column 46
    function sortValue_51 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 180, column 46
    function sortValue_52 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 185, column 46
    function sortValue_53 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 127, column 38
    function valueRoot_39 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 24, column 38
    function value_0 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LossParty")
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 48, column 38
    function value_10 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "State")
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 52, column 112
    function value_12 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "CreateTime") )
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 56, column 111
    function value_14 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "CloseDate") )
    }
    
    // 'value' attribute on TextInput (id=ReOpenDate_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 60, column 112
    function value_16 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "ReOpenDate") )
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 65, column 38
    function value_18 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ClosedOutcome")
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 29, column 38
    function value_2 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "PrimaryCoverage")
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 69, column 110
    function value_20 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "StatLine") )
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 76, column 119
    function value_22 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getClaimant(SnapshotParam, Exposure)["Contact"] )
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 81, column 38
    function value_24 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ClaimantType")
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 88, column 38
    function value_26 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(SnapshotParam, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 92, column 123
    function value_28 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone( util.Snapshot.getClaimant(SnapshotParam, Exposure)["Contact"] )
    }
    
    // 'value' attribute on TextInput (id=ClaimantAddress_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 96, column 147
    function value_30 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getClaimant(SnapshotParam, Exposure)["Contact"]["PrimaryAddress"] )
    }
    
    // 'value' attribute on TextInput (id=TempLocation_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 105, column 114
    function value_32 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "TempLocation") )
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 114, column 38
    function value_34 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "Description")
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 119, column 38
    function value_36 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LossEstimate")
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 127, column 38
    function value_38 () : dynamic.Dynamic {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 34, column 38
    function value_4 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "CoverageSubType")
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 132, column 38
    function value_41 () : dynamic.Dynamic {
      return Exposure.Segment
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 137, column 38
    function value_44 () : dynamic.Dynamic {
      return Exposure.Strategy
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 147, column 38
    function value_47 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "OtherCoverage")
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 38, column 127
    function value_6 () : java.lang.String {
      return util.Snapshot.getCoverageName(SnapshotParam, util.Snapshot.getPropertyValue(Exposure, "Coverage"))
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 158, column 44
    function value_69 () : java.lang.Object[] {
      return util.Snapshot.getPropertyValue(Exposure, "OtherCoverageDet") as Object[]
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 199, column 51
    function value_72 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["RemainingReserves"]
    }
    
    // 'value' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 205, column 51
    function value_76 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["FuturePayments"]
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 43, column 38
    function value_8 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "AssignedUser")["Contact"]
    }
    
    // 'value' attribute on TextInput (id=TotalPayments_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 211, column 51
    function value_80 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["TotalPayments"]
    }
    
    // 'value' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 217, column 53
    function value_84 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "TotalRecoveries")
    }
    
    // 'value' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 223, column 59
    function value_88 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["TotalIncurredNet"]
    }
    
    // 'visible' attribute on Label at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 193, column 61
    function visible_70 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // 'visible' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 199, column 51
    function visible_71 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 205, column 51
    function visible_75 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 217, column 53
    function visible_83 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 223, column 59
    function visible_87 () : java.lang.Boolean {
      return perm.Claim.viewnettotalincurred(Claim)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Exposure () : dynamic.Dynamic {
      return getRequireValue("Exposure", 0) as dynamic.Dynamic
    }
    
    property set Exposure ($arg :  dynamic.Dynamic) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    property get SnapshotParam () : dynamic.Dynamic {
      return getRequireValue("SnapshotParam", 0) as dynamic.Dynamic
    }
    
    property set SnapshotParam ($arg :  dynamic.Dynamic) {
      setRequireValue("SnapshotParam", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotExposure300DV.LossOfUseDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposure300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 164, column 46
    function valueRoot_55 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 164, column 46
    function value_54 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 169, column 46
    function value_57 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 174, column 46
    function value_60 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 180, column 46
    function value_63 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure300DV.LossOfUseDamage.pcf: line 185, column 46
    function value_66 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}