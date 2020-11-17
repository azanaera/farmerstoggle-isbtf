package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/exposures/ExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExposuresLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/exposures/ExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExposuresLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at ExposuresLV.pcf: line 48, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.All
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at ExposuresLV.pcf: line 50, column 56
    function filters_2 () : gw.api.filters.IFilter[] {
      return FilterSet.getFilterOptions(Claim)
    }
    
    // 'initialValue' attribute on Variable at ExposuresLV.pcf: line 27, column 55
    function initialValue_0 () : gw.api.exposure.ClaimExposuresFilterSet {
      return gw.api.exposure.ClaimExposuresFilterSet.INSTANCE
    }
    
    // 'value' attribute on TextCell (id=vehicle_ext_Cell) at ExposuresLV.pcf: line 122, column 65
    function sortValue_13 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.VehicleIncident.Vehicle.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=loss_party_ext_Cell) at ExposuresLV.pcf: line 127, column 46
    function sortValue_14 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TextCell (id=Order_Cell) at ExposuresLV.pcf: line 60, column 42
    function sortValue_3 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ClaimOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ExposuresLV.pcf: line 67, column 45
    function sortValue_4 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at ExposuresLV.pcf: line 73, column 45
    function sortValue_5 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.PrimaryCoverage
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at ExposuresLV.pcf: line 88, column 51
    function sortValue_6 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at ExposuresLV.pcf: line 88, column 51
    function sortValue_7 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at ExposuresLV.pcf: line 88, column 51
    function sortValue_8 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.AssignedQueue
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ExposuresLV.pcf: line 94, column 46
    function sortValue_9 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.State
    }
    
    // 'value' attribute on RowIterator at ExposuresLV.pcf: line 33, column 37
    function value_62 () : entity.Exposure[] {
      return ExposureList
    }
    
    // 'visible' attribute on CurrencyCell (id=RemainingReserves_Cell) at ExposuresLV.pcf: line 102, column 53
    function visible_10 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on CurrencyCell (id=FuturePayments_Cell) at ExposuresLV.pcf: line 110, column 53
    function visible_11 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get ClaimExposures () : gw.api.exposure.ClaimExposuresHelper {
      return getRequireValue("ClaimExposures", 0) as gw.api.exposure.ClaimExposuresHelper
    }
    
    property set ClaimExposures ($arg :  gw.api.exposure.ClaimExposuresHelper) {
      setRequireValue("ClaimExposures", 0, $arg)
    }
    
    property get ExposureList () : Exposure[] {
      return getRequireValue("ExposureList", 0) as Exposure[]
    }
    
    property set ExposureList ($arg :  Exposure[]) {
      setRequireValue("ExposureList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.exposure.ClaimExposuresFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.exposure.ClaimExposuresFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.exposure.ClaimExposuresFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/exposures/ExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ExposuresLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Order_Cell) at ExposuresLV.pcf: line 60, column 42
    function action_18 () : void {
      ExposureDetail.drilldown(Exposure)
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at ExposuresLV.pcf: line 67, column 45
    function action_23 () : void {
      ExposureDetail.drilldown(Exposure)
    }
    
    // 'action' attribute on TextCell (id=Claimant_Cell) at ExposuresLV.pcf: line 81, column 39
    function action_31 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Claim)
    }
    
    // 'action' attribute on TextCell (id=Assignee_Cell) at ExposuresLV.pcf: line 88, column 51
    function action_36 () : void {
      UserContactDetailPopup.push(Exposure.AssignedUser)
    }
    
    // 'action' attribute on TextCell (id=Order_Cell) at ExposuresLV.pcf: line 60, column 42
    function action_dest_19 () : pcf.api.Destination {
      return pcf.ExposureDetail.createDestination(Exposure)
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at ExposuresLV.pcf: line 67, column 45
    function action_dest_24 () : pcf.api.Destination {
      return pcf.ExposureDetail.createDestination(Exposure)
    }
    
    // 'action' attribute on TextCell (id=Claimant_Cell) at ExposuresLV.pcf: line 81, column 39
    function action_dest_32 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Claim)
    }
    
    // 'action' attribute on TextCell (id=Assignee_Cell) at ExposuresLV.pcf: line 88, column 51
    function action_dest_37 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(Exposure.AssignedUser)
    }
    
    // 'condition' attribute on ToolbarFlag at ExposuresLV.pcf: line 36, column 35
    function condition_15 () : java.lang.Boolean {
      return !ClaimExposures.isBeingEdited(Exposure) and perm.Exposure.assign(Exposure)
    }
    
    // 'condition' attribute on ToolbarFlag at ExposuresLV.pcf: line 39, column 34
    function condition_16 () : java.lang.Boolean {
      return Exposure.canClose(User.util.CurrentUser) and !ClaimExposures.isBeingEdited(Exposure)
    }
    
    // 'condition' attribute on ToolbarFlag at ExposuresLV.pcf: line 42, column 34
    function condition_17 () : java.lang.Boolean {
      return Exposure.canCreateReserve(User.util.CurrentUser) and !ClaimExposures.isBeingEdited(Exposure)
    }
    
    // 'value' attribute on TextCell (id=Order_Cell) at ExposuresLV.pcf: line 60, column 42
    function valueRoot_21 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on CurrencyCell (id=RemainingReserves_Cell) at ExposuresLV.pcf: line 102, column 53
    function valueRoot_45 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextCell (id=vehicle_ext_Cell) at ExposuresLV.pcf: line 122, column 65
    function valueRoot_57 () : java.lang.Object {
      return Exposure.VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextCell (id=Order_Cell) at ExposuresLV.pcf: line 60, column 42
    function value_20 () : java.lang.Integer {
      return Exposure.ClaimOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ExposuresLV.pcf: line 67, column 45
    function value_25 () : typekey.ExposureType {
      return Exposure.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at ExposuresLV.pcf: line 73, column 45
    function value_28 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ExposuresLV.pcf: line 81, column 39
    function value_33 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextCell (id=Assignee_Cell) at ExposuresLV.pcf: line 88, column 51
    function value_38 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ExposuresLV.pcf: line 94, column 46
    function value_41 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on CurrencyCell (id=RemainingReserves_Cell) at ExposuresLV.pcf: line 102, column 53
    function value_44 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyCell (id=FuturePayments_Cell) at ExposuresLV.pcf: line 110, column 53
    function value_48 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyCell (id=Paid_Cell) at ExposuresLV.pcf: line 118, column 53
    function value_52 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on TextCell (id=vehicle_ext_Cell) at ExposuresLV.pcf: line 122, column 65
    function value_56 () : java.lang.String {
      return Exposure.VehicleIncident.Vehicle.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=loss_party_ext_Cell) at ExposuresLV.pcf: line 127, column 46
    function value_59 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'visible' attribute on CurrencyCell (id=RemainingReserves_Cell) at ExposuresLV.pcf: line 102, column 53
    function visible_46 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on CurrencyCell (id=FuturePayments_Cell) at ExposuresLV.pcf: line 110, column 53
    function visible_50 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    property get Exposure () : entity.Exposure {
      return getIteratedValue(1) as entity.Exposure
    }
    
    
  }
  
  
}